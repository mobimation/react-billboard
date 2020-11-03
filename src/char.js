/** Font library for 7x5 character pixel display.
    The appearance of each character is described
    by means of an array of seven bytes.
    For example the digit "2":
  {
    0xE,  // 0 1 1 1 0       * * *
    0x11, // 1 0 0 0 1     *       *
    0x01, // 0 0 0 0 1             *
    0x2,  // 0 0 0 1 0           *
    0x4,  // 0 0 1 0 0         *
    0x8,  // 0 1 0 0 0       *
    0x1F  // 1 1 1 1 1     * * * * *
  }
    "1" means a lit pixel, "0" is unlit.
    The ascii code for "2" is hex 32 (decimal 50) so its description
    will appear in position 50 [0..255] of the character set font array.

   The font data is an array 0-255 that each represent an ASCII key code.
   See: https://www.ascii-codes.com/
   So during the printout of a string to the display this table is accessed
   to provide pixel data for what pixels to set 'lit' or 'unlit' respectively
   in each character position of the pixel array in order to display the text.
**/
      const arr = { "A": [1,2,3,4,5,6,7], "B": [0,0,0,0,0,0,0], "C": [0,0,0,0,0,0,0] };
      const a="A";
      var x=arr[{a}[3]];
