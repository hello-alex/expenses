#!/bin/sh

npm run build
rm -rf ../website/expenses
cp -a build/. ../website/expenses