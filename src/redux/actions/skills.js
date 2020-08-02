import { CLEAR_RESUME } from "../../constants";

export const addSkill = () => ({
  type: "ADD_SKILL",
  payload: { skill: "" },
});

export const deleteSkill = (index) => ({
  type: "DELETE_SKILL",
  payload: index,
});

export const updateSkill = (index, editSkill) => ({
  type: "UPDATE_SKILL",
  payload: { index, editSkill },
});

export const clearResume = () => ({
  type: CLEAR_RESUME,
});
