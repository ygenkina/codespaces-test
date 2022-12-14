import { saveFileInContainer } from "@inrupt/solid-client";
import { fetch } from "@inrupt/solid-client-authn-browser";
// Using the methods above fill in the function below:
// Upload the assets/Resume.pdf file to the Container.
// Alternatively, you can use overwriteFile() instead, specifying the target URL instead of the Container URL.
// Remember to consider if these should be authenticated calls or not.

export const createPDFInContainer = async (containerURL, file, fileName) => {
  alert("Complete exercise 09_createPDFInContainer"); // delete this line

  try {
    
  } catch (e) {
    alert(e);
  }
};

export default createPDFInContainer;
