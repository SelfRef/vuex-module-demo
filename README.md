---
code_name: TM-W_VUEX-MODULE-POC
category: Software
create_date: 2019-09
author: TM
author_site: timsmanter.net
project_site: me.timsmanter.net
editor: Visual Studio Code
language: [TypeScript, JavaScript]
framework: Vue.js
locale: en_US
license: MIT
status:
	- Stable
	- Sample
---

![Screenshot](docs/screenshot.png)

# Synopsis

Simple proof of concept with comparison of two ways to create Vuex store modules.
Both projects work exactly the same way and have same funcionality.
Names in the code are preserved where possible in both projects.

# Modules

- vuex-only: Reference project using JavaScript and regular Vuex modules
- vuex-modules: Reference project using TypeScript, Vue class components and Vuex dynamic class modules

# Run

> NOTE: `npm` can be used instead of `yarn`

1. Go to project directory (`vuex-modules` or `vuex-only`)
2. Install dependencies by `yarn install`
3. Run dev server by `yarn run serve`
4. Open browser at [localhost:8080](http://localhost:8080)