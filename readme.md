# Sling JSON Lint
## Apache Sling / Adobe Experience Manager (AEM) / CQ  reserved JSON property remover and JSON Validator

This tool is based on the JSON Lint Validator at http://jsonlint.com and adds a step for removing the reserved properties not allowed to be loaded into the Adobe AEM / Sling Repository Importers.  This tool is useful for stripping reserved properties any *.infinity.json output that includes reserved properties that can't be re-imported by Sling using either the Sling Initial-Content loader or the Sling Post Servlet import functions.

The tool is hosted on github pages here: http://odu.github.io/slingjsonlint/ but can also be run on the local machine or hosted elsewhere.

## Removed Properties

The current properties that are removed are:

* cq:lastModified
* cq:lastModifiedBy
* jcr:baseVersion
* jcr:created
* jcr:createdBy
* jcr:isCheckedOut
* jcr:lastModified
* jcr:lastModifiedBy
* jcr:uuid
* jcr:versionHistory