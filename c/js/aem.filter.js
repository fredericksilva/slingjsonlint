var AEM = {};

AEM.filter = function(obj) {
    AEM.filterProperties(obj);
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                AEM.filter(obj[property]);
            }
        }
    }
};

AEM.filterProperties = function(obj) {
    delete obj["cq:lastModified"];
    delete obj["cq:lastModifiedBy"];
    delete obj["jcr:baseVersion"];
    delete obj["jcr:created"];
    delete obj["jcr:createdBy"];
    delete obj["jcr:isCheckedOut"];
    delete obj["jcr:lastModified"];
    delete obj["jcr:lastModifiedBy"];
    delete obj["jcr:uuid"];
    delete obj["jcr:versionHistory"];
};