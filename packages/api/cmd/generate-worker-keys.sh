#!/usr/bin/env sh
source ./cmd/env.sh

yarn ts-node script/generate-worker-keys.ts

{ set +x; } 2>/dev/null
