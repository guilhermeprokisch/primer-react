'use strict';

var createSlots = require('../utils/create-slots.js');

const {
  Slots,
  Slot
} = createSlots(['Caption', 'Input', 'Label', 'LeadingVisual']);

exports.Slot = Slot;
exports.Slots = Slots;