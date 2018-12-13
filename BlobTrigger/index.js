module.exports = async function (context, myBlob) {
    context.log(`JavaScript blob trigger function processed blob - Name: ${context.bindingData.name}; Blob Size: ${myBlob.length} Bytes`);
};