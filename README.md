## Community Data

Community Data is an open & extensible repository of over 1M+ people & companies, focused primarily on the startup ecosystem. The data is collaboratively maintained in a git repository and stored as JSON documents that conform to a collection of [JSON Schema](https://json-schema.org/) definitions.

## Architecture

The project's constituent parts serve to create or enhance data documents or to provide interfaces to consume such data.

### Data repository

The central data repository is a collection of folders for each of the top-level data models supported in the platform. Each top-level folder is a single level collection of JSON documents that conform to a canonical schema definiton. 

### Data validation

Data validation is performed against the corresponding JSON Schema on each commit to the repo. Any document that fails validation against the schema will reject the commit. You can find the JSON Schema definitions for each of the canonical data models here: 

* companies
* people
* locations
* sectors
* stages

### Data contributions

Anyone can currently contribute data to the repository by simply creating or editing a JSON file. While it is possible to edit the raw JSON in GitHub or a code/text editor, conforming the data to the appropriate schema definitions to ensure it will validate would be difficult. As such, we have created a few mechanisms for end-users to contribute new data to the respository. 

#### Editor

The [Community Data editor](https://editor.communitydata.io/) is a proof-of-concept git interface written as a Next.js application that interacts with the GitHub API. Contributors are required to authenticate with their GitHub accounts to make contributions. 

The editor provides a simple form for each data model that is generated using [React JSON Schema Form](https://github.com/rjsf-team/react-jsonschema-form). This enables the editor to update automatically as the core JSON Schema definitions evolve. 

#### Enhancers

Data enhancers are scripts that consume public APIs or websites, structure the information according to the canonical JSON schemas, and perform mass imports to the repository. For example, there are enhancers that scrape the portfolio pages of venture capital websites to discover new investments and add them to the "investments" collection in the corresponding company JSON document for the investor (or person JSON document if it was an angel investment). 

Anyone can write data enhancers as standalone private or public scripts or post them to the enhancer repository for further collaboration.

### Data ownership

### Data consumption

#### GraphQL API
#### Chrome extension
#### 3rd party applications

## Application development

## FAQs

### Why JSON and JSON Schema? 

* Flexible schemas
* Human readable and editable
* Developer friendly
* Better interface for Javascript applications

## Governance 

## Licensing
