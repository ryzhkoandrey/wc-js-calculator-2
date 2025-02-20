import * as Model from './model.js';
import programs from './view/radioPrograms.js';

window.onload = function () {

    const getData = Model.getData;

    // Init programs
    programs(getData);
}