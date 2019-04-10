export const SET_PROGRAM_CODE = "SET_PROGRAM_CODE";
export function setProgramCode(program, value) {
  return { type: SET_PROGRAM_CODE, program, value };
}

export const SET_PROGRAM_LANGUAGE = "SET_PROGRAM_LANGUAGE";
export function setProgramLanguage(program, value) {
  return { type: SET_PROGRAM_LANGUAGE, program, value };
}

export const DELETE_PROGRAM = "DELETE_PROGRAM";
export function setRunResult(result) {
  return { type: DELETE_PROGRAM, runResult: result };
}

export const LOAD_PROGRAMS = "LOAD_PROGRAMS";
export function loadPrograms(programs) {
  return { type: LOAD_PROGRAMS, programs };
}

export const CLEAR_PROGRAMS = "CLEAR_PROGRAMS";
export function clearPrograms() {
  return { type: CLEAR_PROGRAMS };
}
