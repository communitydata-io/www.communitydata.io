## Community Data

Community Data is an open & extensible repository of over 1M+ people & companies, focused primarily on the startup ecosystem. The data is collaboratively maintained in a git repository and stored as JSON documents that conform to a collection of [JSON Schema](https://json-schema.org/) definitions.

## Architecture

The project's constituent parts serve to create or enhance data documents or to provide interfaces to consume such data.

### Data repository

[https://github.com/communitydata-io/data](https://github.com/communitydata-io/data)

The central data repository is a collection of folders for each of the top-level data models supported in the platform. Each top-level folder is a single level collection of JSON documents that conform to a canonical schema definiton. 

### Data validation

Data validation is performed against the corresponding JSON Schema on each commit to the repo. Any document that fails validation against the schema will reject the commit. You can find the JSON Schema definitions for each of the canonical data models here: 

* [company](https://docs.communitydata.io/datamodels/company)
* [person](https://docs.communitydata.io/datamodels/person)
* [location](https://docs.communitydata.io/datamodels/location)
* [sector](https://docs.communitydata.io/datamodels/sector)
* [stage](https://docs.communitydata.io/datamodels/stage)

### Data contributions

Anyone can currently contribute data to the repository by simply creating or editing a JSON file. While it is possible to edit the raw JSON in GitHub or a code/text editor, conforming the data to the appropriate schema definitions to ensure it will validate would be difficult. As such, we have created a few mechanisms for end-users to contribute new data to the respository. 

#### Editor

The [Community Data editor](https://editor.communitydata.io/) is a proof-of-concept git interface written as a Next.js application that interacts with the GitHub API. Contributors are required to authenticate with their GitHub accounts to make contributions. 

The editor provides a simple form for each data model that is generated using [React JSON Schema Form](https://github.com/rjsf-team/react-jsonschema-form). This enables the editor to update automatically as the core JSON Schema definitions evolve. 

#### Enhancers

Data enhancers are scripts that consume public APIs or websites, structure the information according to the canonical JSON schemas, and perform mass imports to the repository. For example, there are enhancers that scrape the portfolio pages of venture capital websites to discover new investments and add them to the "investments" collection in the corresponding company JSON document for the investor (or person JSON document if it was an angel investment). 

Anyone can write data enhancers as standalone private or public scripts or post them to the enhancer repository for further collaboration.

### Data ownership

One of the core principles of the Community Data project is that individual data documents can be maintained and owned by select individuals or groups of individuals. 

Proving ownership over data documents is performed by submitting a verification proof to any of the core disambiguation attributes for the object type. For example, a Person object would require posting a proof to Twitter, LinkedIn or a personal website. 

The Verification Service will add an ```owners``` attribute to the data document that contains the GitHub username for the user who posted the proof. Any pull-request to the data document by any GitHub user in the ```owners``` array be merged automatically without need for review. 

### Data consumption

There are a growing collection of interfaces to consume data from the repository. Since the data is open-source, anyone is free to create their own API on top of the data. The core project contributors also provide a few public and private interfaces for convenience. 

#### GraphQL API

The core contributors provide a GraphQL API for developers to consume for public or private use. Please see the [GraphQL API](https://docs.communitydata.io/api) documentation for more details. 

#### 3rd-party applications

There is a growing list of 3rd-party applications built upon Community Data. We encourage any developers to check out the [GraphQL API](https://docs.communitydata.io/api) for details on how to consume data for your application. We also encourage any apps to list their projects in the ```[apps repository](#)```

## Application development

## Governance 

## License 
