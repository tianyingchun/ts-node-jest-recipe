# TS-node

<https://typestrong.org/ts-node/docs/options>

## showConfig

Print resolved tsconfig.json, including ts-node options, and exit
`ts-node --showConfig`

## project

```text
ts-node -P <path/to/tsconfig>
ts-node --project <path/to/tsconfig>
```

Path to tsconfig file.
Note the uppercase -P. This is different from tsc's -p/--project option.

```text
Environment: TS_NODE_PROJECT
```

## Typechecking

transpileOnly

```shell
ts-node -T
ts-node --transpileOnly
```

```text
Default: false
Environment: TS_NODE_TRANSPILE_ONLY
```

## files

`ts-node --files`
Load files, include and exclude from tsconfig.json on startup. This may avoid certain typechecking failures. See Missing types for details.

```text
Default: false
Environment: TS_NODE_FILES
```

## ignoreDiagnostics

```text
ts-node -D <code,code>
ts-node --ignoreDiagnostics <code,code>
```

Ignore TypeScript warnings by diagnostic code

```text
Environment: TS_NODE_IGNORE_DIAGNOSTICS
```
