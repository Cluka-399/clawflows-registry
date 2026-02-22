# Performance Benchmark

Run scheduled performance benchmarks and track trends over time.

## What It Does

1. **Runs benchmarks** - Executes configured performance test suites
2. **Records results** - Stores metrics with timestamps
3. **Tracks trends** - Identifies regressions or improvements

## Requirements

| Capability | Example Skills |
|------------|----------------|
| `exec` | shell |

## Configuration

```yaml
config:
  benchmark_script: "./bench.sh"
  threshold_ms: 500
```

## Schedule

Runs daily at 3:00 AM (`0 3 * * *`).

## Install

```bash
openclaw install performance-benchmark
```
