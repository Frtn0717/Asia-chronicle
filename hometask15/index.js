import { showCategories, showTitles } from './modules/show-dropdown-items.js';
import { categoryBtn, titleBtn } from './modules/variables.js';

categoryBtn.onclick = showCategories;
titleBtn.onclick = showTitles;
