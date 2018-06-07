/**
 * Test shortening and extending codes.
 * test_type is R for recovery only, S for shorten only, or B for both.
 */
export default [
  ["9C3W9QCJ+2VX", 51.3701125, -1.217765625, "+2VX", "B"],
  // Adjust so we can't trim by 8 (+/- .000755)
  ["9C3W9QCJ+2VX", 51.3708675, -1.217765625, "CJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3693575, -1.217765625, "CJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3701125, -1.218520625, "CJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3701125, -1.217010625, "CJ+2VX", "B"],
  // Adjust so we can't trim by 6 (+/- .0151)
  ["9C3W9QCJ+2VX", 51.3852125, -1.217765625, "9QCJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3550125, -1.217765625, "9QCJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3701125, -1.232865625, "9QCJ+2VX", "B"],
  ["9C3W9QCJ+2VX", 51.3701125, -1.202665625, "9QCJ+2VX", "B"],
  // Added to detect error in recoverNearest functionality
  ["8FJFW222+", 42.899, 9.012, "22+", "B"],
  ["796RXG22+", 14.95125, -23.5001, "22+", "B"],
  // Reference location is in the 4 digit cell to the south.
  ["8FVC2GGG+GG", 46.976, 8.526, "2GGG+GG", "B"],
  // Reference location is in the 4 digit cell to the north.
  ["8FRCXGGG+GG", 47.026, 8.526, "XGGG+GG", "B"],
  // Reference location is in the 4 digit cell to the east.
  ["8FR9GXGG+GG", 46.526, 8.026, "GXGG+GG", "B"],
  // Reference location is in the 4 digit cell to the west.
  ["8FRCG2GG+GG", 46.526, 7.976, "G2GG+GG", "B"],
  // Added to detect errors recovering codes near the poles.
  // This tests recovery function, but these codes won't shorten.
  ["CFX22222+22", 89.6, 0.0, "2222+22", "R"],
  ["2CXXXXXX+XX", -81.0, 0.0, "XXXXXX+XX", "R"]
];
