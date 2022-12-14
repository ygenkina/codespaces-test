import {
  getSolidDataset,
  getStringNoLocale,
  getThing,
} from "@inrupt/solid-client";
import { SCHEMA_INRUPT } from "@inrupt/vocab-common-rdf";
import { fetch } from "@inrupt/solid-client-authn-browser";
import { defaultBioThingName } from "../constants";

// Using the above imports, fill in the function below:
// Get the UserData SolidDataset at the datasetURL.
// From the SolidDataset, get the Thing from the previous exercise.
// - The Thing's URL is SolidDataset's URL appended with the Thing's name as hash fragment. (Ex: datasetURL + # + defaultBioThingName )
// From the Thing, get the String values for:
// - SCHEMA_INRUPT.description and
// - SCHEMA_INRUPT.name properties.
// Return the concatenated string values "${nameValue}:  ${ descriptionValue } ".
// Remember to consider if these should be authenticated calls or not.

export const readUserDataSolidDataset = async (datasetURL) => {
  alert("Complete exercise 02_readUserDataSolidDataset"); // delete this line

  try {
  } catch (e) {
    alert(e);
  }
};

export default readUserDataSolidDataset;
