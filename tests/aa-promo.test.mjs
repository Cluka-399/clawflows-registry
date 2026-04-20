import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const indexHtml = fs.readFileSync(path.resolve('index.html'), 'utf8');

test('Agent Analytics promo sends users to the scanner-first landing with attribution', () => {
  assert.match(
    indexHtml,
    /https:\/\/agentanalytics\.sh\/(\?[^"']*)?utm_source=clawflows/i,
    'expected Agent Analytics promo link to include clawflows attribution'
  );
  assert.match(
    indexHtml,
    /utm_medium=promo/i,
    'expected Agent Analytics promo link to include promo medium attribution'
  );
});

test('Agent Analytics promo copy explains the scanner-first value clearly', () => {
  assert.match(
    indexHtml,
    /scan your site/i,
    'expected scanner-first CTA language in Agent Analytics promo'
  );
  assert.match(
    indexHtml,
    /first growth questions|what your site should measure first/i,
    'expected scanner-value language in Agent Analytics promo'
  );
});
