import path from 'node:path';
import process from 'node:process'; // Astro must be run while the current working directory is the repository root so that the comparison files can be detected.
import readFileTree from 'readfiletree';
import sortKeys from 'sort-keys';
import {engineOrder} from './newest-engine';

type FileTree = {[fileName: string]: string | FileTree};

type Engine = Array<{
  language: string;
  code: string;
}>;

interface Comparison {
  engines: {
    ie8?: Engine;
    ie9?: Engine;
    ie10?: Engine;
    ie11?: Engine;
    jquery: Engine;
    modern?: Engine;
  };
  alternatives?: Record<string, string>;
}

interface Category {
  comparisons: Record<string, Comparison>;
  alternatives?: Record<string, string>;
}

type Comparisons = Record<string, Category>;

export default async function getComparisons(): Promise<Comparisons> {
  const fileTree: FileTree = await readFileTree(
    path.join(process.cwd(), 'src', 'comparisons')
  );
  const categories = {};

  for (const [categoryName, comparisons] of Object.entries(fileTree)) {
    const category: Category = {
      comparisons: {}
    };

    if (comparisons['alternatives.json']) {
      category.alternatives = JSON.parse(comparisons['alternatives.json']);
      delete comparisons['alternatives.json'];
    }

    for (const [comparisonName, engines] of Object.entries(comparisons)) {
      const comparison: Comparison = {
        engines: {
          jquery: [
            {
              language: 'js',
              code: engines['jquery.js']
            }
          ]
        }
      };

      delete engines['jquery.js'];

      if (engines['alternatives.json']) {
        comparison.alternatives = JSON.parse(engines['alternatives.json']);
        delete engines['alternatives.json'];
      }

      for (const [engineFile, code] of Object.entries(engines)) {
        const [engineName, extension] = engineFile.split('.');

        if (!comparison.engines[engineName]) {
          comparison.engines[engineName] = [];
        }

        comparison.engines[engineName].push({
          language: extension,
          code
        });
      }

      for (const engines of Object.values(comparison.engines)) {
        // Sorted in-place
        engines.sort((a, b) => {
          if (a.language === 'js') {
            return -1;
          }

          if (b.language === 'js') {
            return 1;
          }

          return a.language.localeCompare(b.language);
        });
      }

      comparison.engines = sortKeys(comparison.engines, {
        compare: (a, b) => engineOrder.indexOf(a) - engineOrder.indexOf(b)
      });

      category.comparisons[comparisonName] = comparison;
    }

    category.comparisons = sortKeys(category.comparisons);

    categories[categoryName] = category;
  }

  return sortKeys(categories);
}
