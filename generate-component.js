const fs = require("fs");
const path = require("path");

// TODO DELETE THIS FILE

// Function to create a new React component folder and files
function createComponent(componentName) {
  // Ensure the component name starts with an uppercase letter
  const componentFolderName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1);
  const componentDir = path.join(
    __dirname,
    "src",
    "components",
    componentFolderName
  );

  // Create the component folder
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  // Define the file names
  const componentFile = path.join(componentDir, `${componentFolderName}.tsx`);
  const styledFile = path.join(
    componentDir,
    `${componentFolderName}.styled.tsx`
  );
  const typedFile = path.join(componentDir, `${componentFolderName}.types.ts`);

  // Define the content for each file
  const componentContent = `import React from 'react';
import { Styled${componentFolderName} } from './${componentFolderName}.styled';
import { ${componentFolderName}Props } from './${componentFolderName}.types';

function ${componentFolderName}(props: ${componentFolderName}Props) {
  return (
    <Styled${componentFolderName}>
    </Styled${componentFolderName}>
  );
};

export default ${componentFolderName};
`;

  const styledContent = `import styled from "@emotion/styled";

export const Styled${componentFolderName} = styled.div\`
\`;
`;

  const typedContent = `export interface ${componentFolderName}Props {
}
`;

  // Create the files with the content
  fs.writeFileSync(componentFile, componentContent);
  fs.writeFileSync(styledFile, styledContent);
  fs.writeFileSync(typedFile, typedContent);

  console.log(`Component ${componentFolderName} created successfully!`);
}

// Get the component name from the command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

// Create the component with the given name
createComponent(componentName);
