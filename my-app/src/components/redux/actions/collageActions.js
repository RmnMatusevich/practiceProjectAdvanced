import {
  ACTION_CHANGE_IMAGE,
  ACTION_CHANGE_TITTLE,
  ACTION_CHANGE_DESCRIPTION,
  ACTION_CHANGE_USER_INPUT,
  ACTION_CHANGE_COLLAGE,
} from "../globalVariables";

function setImage(image) {
  return {
    type: ACTION_CHANGE_IMAGE,
    image,
  };
}
function setTittle(tittle) {
  return {
    type: ACTION_CHANGE_TITTLE,
    tittle,
  };
}
function setDescription(description) {
  return {
    type: ACTION_CHANGE_DESCRIPTION,
    description,
  };
}
function setUserInput(userInput) {
  return {
    type: ACTION_CHANGE_USER_INPUT,
    userInput,
  };
}
function setCollage(collage) {
  return {
    type: ACTION_CHANGE_COLLAGE,
    collage,
  };
}

export { setCollage, setDescription, setImage, setTittle, setUserInput };
