# Azure Functions Spike

## Setup

### Step 1

Install the [Azure storage emulator](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-emulator#storage-emulator-command-line-tool-reference) and the [Azure storage explorer](https://azure.microsoft.com/en-us/features/storage-explorer/) and run them. You should see *Emulator - Default Ports (Key)* under storage accounts.

### Step 2

```
npm i
```

Open *BlobTrigger/index.js* and hit **F5**, you should get a message saying it's running locally.

### Step 3

Create a new blob container called 'samples-workitems' in the explorer and upload a text file. If all is well, it should log to the console.

## Testing

```
npm run test
```

## Notes

The project was generated using the [Azure Functions Core tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2) and the [Azure Functions](https://github.com/Microsoft/vscode-azurefunctions) VSCode extension. Instructions for setting up a basic hello-world type project can be found [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code).