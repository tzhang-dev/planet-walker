// map_from_discrete_score_to_globe_canvas
type position = [number, number];
type mapper = {
  [k: number]: position;
};
type mapper_type = {
  half: mapper;
  whole: mapper;
  bonus: mapper;
};
const mapper_index: { left: mapper_type; right: mapper_type } = {
  left: {
    half: {
      0: [25, 14],
      1: [25, 13],
      2: [25, 12],
      3: [24, 14],
      4: [24, 13],
      5: [24, 12],
      6: [24, 11],
      7: [24, 10],
      8: [23, 14],
      9: [23, 13],
      10: [23, 12],
      11: [23, 11],
      12: [23, 10],
      13: [23, 9],
      14: [23, 8],
      15: [22, 14],
      16: [22, 13],
      17: [22, 12],
      18: [22, 11],
      19: [22, 10],
      20: [22, 9],
      21: [22, 8],
      22: [22, 7],
      23: [21, 14],
      24: [21, 13],
      25: [21, 12],
      26: [21, 11],
      27: [21, 10],
      28: [21, 9],
      29: [21, 8],
      30: [21, 7],
      31: [21, 6],
      32: [20, 14],
      33: [20, 13],
      34: [20, 12],
      35: [20, 11],
      36: [20, 10],
      37: [20, 9],
      38: [20, 8],
      39: [20, 7],
      40: [20, 6],
      41: [19, 14],
      42: [19, 13],
      43: [19, 12],
      44: [19, 11],
      45: [19, 10],
      46: [19, 9],
      47: [19, 8],
      48: [19, 7],
      49: [19, 6],
      50: [19, 5],
      51: [18, 14],
      52: [18, 13],
      53: [18, 12],
      54: [18, 11],
      55: [18, 10],
      56: [18, 9],
      57: [18, 8],
      58: [18, 7],
      59: [18, 6],
      60: [18, 5],
      61: [17, 14],
      62: [17, 13],
      63: [17, 12],
      64: [17, 11],
      65: [17, 10],
      66: [17, 9],
      67: [17, 8],
      68: [17, 7],
      69: [17, 6],
      70: [17, 5],
      71: [17, 4],
      72: [16, 14],
      73: [16, 13],
      74: [16, 12],
      75: [16, 11],
      76: [16, 10],
      77: [16, 9],
      78: [16, 8],
      79: [16, 7],
      80: [16, 6],
      81: [16, 5],
      82: [16, 4],
      83: [15, 14],
      84: [15, 13],
      85: [15, 12],
      86: [15, 11],
      87: [15, 10],
      88: [15, 9],
      89: [15, 8],
      90: [15, 7],
      91: [15, 6],
      92: [15, 5],
      93: [15, 4],
      94: [14, 14],
      95: [14, 13],
      96: [14, 12],
      97: [14, 11],
      98: [14, 10],
      99: [14, 9],
      100: [14, 8],
      101: [14, 7],
      102: [14, 6],
      103: [14, 5],
      104: [14, 4],
      105: [13, 14],
      106: [13, 13],
      107: [13, 12],
      108: [13, 11],
      109: [13, 10],
      110: [13, 9],
      111: [13, 8],
      112: [13, 7],
      113: [13, 6],
      114: [13, 5],
      115: [13, 4],
      116: [12, 14],
      117: [12, 13],
      118: [12, 12],
      119: [12, 11],
      120: [12, 10],
      121: [12, 9],
      122: [12, 8],
      123: [12, 7],
      124: [12, 6],
      125: [12, 5],
      126: [12, 4],
      127: [11, 14],
      128: [11, 13],
      129: [11, 12],
      130: [11, 11],
      131: [11, 10],
      132: [11, 9],
      133: [11, 8],
      134: [11, 7],
      135: [11, 6],
      136: [11, 5],
      137: [11, 4],
      138: [10, 14],
      139: [10, 13],
      140: [10, 12],
      141: [10, 11],
      142: [10, 10],
      143: [10, 9],
      144: [10, 8],
      145: [10, 7],
      146: [10, 6],
      147: [10, 5],
      148: [9, 14],
      149: [9, 13],
      150: [9, 12],
      151: [9, 11],
      152: [9, 10],
      153: [9, 9],
      154: [9, 8],
      155: [9, 7],
      156: [9, 6],
      157: [9, 5],
      158: [8, 14],
      159: [8, 13],
      160: [8, 12],
      161: [8, 11],
      162: [8, 10],
      163: [8, 9],
      164: [8, 8],
      165: [8, 7],
      166: [8, 6],
      167: [7, 14],
      168: [7, 13],
      169: [7, 12],
      170: [7, 11],
      171: [7, 10],
      172: [7, 9],
      173: [7, 8],
      174: [7, 7],
      175: [7, 6],
      176: [6, 14],
      177: [6, 13],
      178: [6, 12],
      179: [6, 11],
      180: [6, 10],
      181: [6, 9],
      182: [6, 8],
      183: [6, 7],
      184: [5, 14],
      185: [5, 13],
      186: [5, 12],
      187: [5, 11],
      188: [5, 10],
      189: [5, 9],
      190: [5, 8],
      191: [4, 14],
      192: [4, 13],
      193: [4, 12],
      194: [4, 11],
      195: [4, 10],
      196: [3, 15],
      197: [3, 14],
      198: [3, 13],
      199: [3, 12],
    } as mapper,
    whole: {
      0: [23, 11],
      1: [23, 10],
      2: [23, 9],
      3: [22, 11],
      4: [22, 10],
      5: [22, 9],
      6: [22, 8],
      7: [22, 7],
      8: [21, 11],
      9: [21, 10],
      10: [21, 9],
      11: [21, 8],
      12: [21, 7],
      13: [21, 6],
      14: [21, 5],
      15: [20, 11],
      16: [20, 10],
      17: [20, 9],
      18: [20, 8],
      19: [20, 7],
      20: [20, 6],
      21: [20, 5],
      22: [20, 4],
      23: [19, 11],
      24: [19, 10],
      25: [19, 9],
      26: [19, 8],
      27: [19, 7],
      28: [19, 6],
      29: [19, 5],
      30: [19, 4],
      31: [19, 3],
      32: [18, 11],
      33: [18, 10],
      34: [18, 9],
      35: [18, 8],
      36: [18, 7],
      37: [18, 6],
      38: [18, 5],
      39: [18, 4],
      40: [18, 3],
      41: [17, 11],
      42: [17, 10],
      43: [17, 9],
      44: [17, 8],
      45: [17, 7],
      46: [17, 6],
      47: [17, 5],
      48: [17, 4],
      49: [17, 3],
      50: [17, 2],
      51: [16, 11],
      52: [16, 10],
      53: [16, 9],
      54: [16, 8],
      55: [16, 7],
      56: [16, 6],
      57: [16, 5],
      58: [16, 4],
      59: [16, 3],
      60: [16, 2],
      61: [15, 11],
      62: [15, 10],
      63: [15, 9],
      64: [15, 8],
      65: [15, 7],
      66: [15, 6],
      67: [15, 5],
      68: [15, 4],
      69: [15, 3],
      70: [15, 2],
      71: [15, 1],
      72: [14, 11],
      73: [14, 10],
      74: [14, 9],
      75: [14, 8],
      76: [14, 7],
      77: [14, 6],
      78: [14, 5],
      79: [14, 4],
      80: [14, 3],
      81: [14, 2],
      82: [14, 1],
      83: [13, 11],
      84: [13, 10],
      85: [13, 9],
      86: [13, 8],
      87: [13, 7],
      88: [13, 6],
      89: [13, 5],
      90: [13, 4],
      91: [13, 3],
      92: [13, 2],
      93: [13, 1],
      94: [12, 11],
      95: [12, 10],
      96: [12, 9],
      97: [12, 8],
      98: [12, 7],
      99: [12, 6],
      100: [12, 5],
      101: [12, 4],
      102: [12, 3],
      103: [12, 2],
      104: [12, 1],
      105: [11, 11],
      106: [11, 10],
      107: [11, 9],
      108: [11, 8],
      109: [11, 7],
      110: [11, 6],
      111: [11, 5],
      112: [11, 4],
      113: [11, 3],
      114: [11, 2],
      115: [11, 1],
      116: [10, 11],
      117: [10, 10],
      118: [10, 9],
      119: [10, 8],
      120: [10, 7],
      121: [10, 6],
      122: [10, 5],
      123: [10, 4],
      124: [10, 3],
      125: [10, 2],
      126: [10, 1],
      127: [9, 11],
      128: [9, 10],
      129: [9, 9],
      130: [9, 8],
      131: [9, 7],
      132: [9, 6],
      133: [9, 5],
      134: [9, 4],
      135: [9, 3],
      136: [9, 2],
      137: [9, 1],
      138: [8, 11],
      139: [8, 10],
      140: [8, 9],
      141: [8, 8],
      142: [8, 7],
      143: [8, 6],
      144: [8, 5],
      145: [8, 4],
      146: [8, 3],
      147: [8, 2],
      148: [7, 11],
      149: [7, 10],
      150: [7, 9],
      151: [7, 8],
      152: [7, 7],
      153: [7, 6],
      154: [7, 5],
      155: [7, 4],
      156: [7, 3],
      157: [7, 2],
      158: [6, 11],
      159: [6, 10],
      160: [6, 9],
      161: [6, 8],
      162: [6, 7],
      163: [6, 6],
      164: [6, 5],
      165: [6, 4],
      166: [6, 3],
      167: [5, 11],
      168: [5, 10],
      169: [5, 9],
      170: [5, 8],
      171: [5, 7],
      172: [5, 6],
      173: [5, 5],
      174: [5, 4],
      175: [5, 3],
      176: [4, 11],
      177: [4, 10],
      178: [4, 9],
      179: [4, 8],
      180: [4, 7],
      181: [4, 6],
      182: [4, 5],
      183: [4, 4],
      184: [3, 11],
      185: [3, 10],
      186: [3, 9],
      187: [3, 8],
      188: [3, 7],
      189: [3, 6],
      190: [3, 5],
      191: [2, 11],
      192: [2, 10],
      193: [2, 9],
      194: [2, 8],
      195: [2, 7],
      196: [1, 12],
      197: [1, 11],
      198: [1, 10],
      199: [1, 9],
    } as mapper,
    bonus: {
      0: [28, 13],
      1: [27, 11],
      2: [26, 9],
      3: [25, 7],
      4: [24, 5],
      5: [22, 4],
      6: [20, 3],
      7: [18, 2],
      8: [16, 1],
      9: [14, 1],
      10: [12, 1],
      11: [10, 2],
      12: [8, 3],
      13: [6, 4],
      14: [4, 5],
      15: [3, 7],
      16: [2, 9],
      17: [1, 11],
      18: [0, 13],
      19: [0, 15],
    } as mapper,
  },
  right: {
    half: {
      0: [25, 0],
      1: [25, 1],
      2: [25, 2],
      3: [25, 3],
      4: [24, 1],
      5: [24, 2],
      6: [24, 3],
      7: [24, 4],
      8: [24, 5],
      9: [23, 1],
      10: [23, 2],
      11: [23, 3],
      12: [23, 4],
      13: [23, 5],
      14: [23, 6],
      15: [23, 7],
      16: [22, 1],
      17: [22, 2],
      18: [22, 3],
      19: [22, 4],
      20: [22, 5],
      21: [22, 6],
      22: [22, 7],
      23: [22, 8],
      24: [21, 1],
      25: [21, 2],
      26: [21, 3],
      27: [21, 4],
      28: [21, 5],
      29: [21, 6],
      30: [21, 7],
      31: [21, 8],
      32: [21, 9],
      33: [20, 1],
      34: [20, 2],
      35: [20, 3],
      36: [20, 4],
      37: [20, 5],
      38: [20, 6],
      39: [20, 7],
      40: [20, 8],
      41: [20, 9],
      42: [19, 1],
      43: [19, 2],
      44: [19, 3],
      45: [19, 4],
      46: [19, 5],
      47: [19, 6],
      48: [19, 7],
      49: [19, 8],
      50: [19, 9],
      51: [19, 10],
      52: [18, 1],
      53: [18, 2],
      54: [18, 3],
      55: [18, 4],
      56: [18, 5],
      57: [18, 6],
      58: [18, 7],
      59: [18, 8],
      60: [18, 9],
      61: [18, 10],
      62: [17, 1],
      63: [17, 2],
      64: [17, 3],
      65: [17, 4],
      66: [17, 5],
      67: [17, 6],
      68: [17, 7],
      69: [17, 8],
      70: [17, 9],
      71: [17, 10],
      72: [17, 11],
      73: [16, 1],
      74: [16, 2],
      75: [16, 3],
      76: [16, 4],
      77: [16, 5],
      78: [16, 6],
      79: [16, 7],
      80: [16, 8],
      81: [16, 9],
      82: [16, 10],
      83: [16, 11],
      84: [15, 1],
      85: [15, 2],
      86: [15, 3],
      87: [15, 4],
      88: [15, 5],
      89: [15, 6],
      90: [15, 7],
      91: [15, 8],
      92: [15, 9],
      93: [15, 10],
      94: [15, 11],
      95: [14, 1],
      96: [14, 2],
      97: [14, 3],
      98: [14, 4],
      99: [14, 5],
      100: [14, 6],
      101: [14, 7],
      102: [14, 8],
      103: [14, 9],
      104: [14, 10],
      105: [14, 11],
      106: [13, 1],
      107: [13, 2],
      108: [13, 3],
      109: [13, 4],
      110: [13, 5],
      111: [13, 6],
      112: [13, 7],
      113: [13, 8],
      114: [13, 9],
      115: [13, 10],
      116: [13, 11],
      117: [12, 1],
      118: [12, 2],
      119: [12, 3],
      120: [12, 4],
      121: [12, 5],
      122: [12, 6],
      123: [12, 7],
      124: [12, 8],
      125: [12, 9],
      126: [12, 10],
      127: [12, 11],
      128: [11, 1],
      129: [11, 2],
      130: [11, 3],
      131: [11, 4],
      132: [11, 5],
      133: [11, 6],
      134: [11, 7],
      135: [11, 8],
      136: [11, 9],
      137: [11, 10],
      138: [11, 11],
      139: [10, 1],
      140: [10, 2],
      141: [10, 3],
      142: [10, 4],
      143: [10, 5],
      144: [10, 6],
      145: [10, 7],
      146: [10, 8],
      147: [10, 9],
      148: [10, 10],
      149: [9, 1],
      150: [9, 2],
      151: [9, 3],
      152: [9, 4],
      153: [9, 5],
      154: [9, 6],
      155: [9, 7],
      156: [9, 8],
      157: [9, 9],
      158: [9, 10],
      159: [8, 1],
      160: [8, 2],
      161: [8, 3],
      162: [8, 4],
      163: [8, 5],
      164: [8, 6],
      165: [8, 7],
      166: [8, 8],
      167: [8, 9],
      168: [7, 1],
      169: [7, 2],
      170: [7, 3],
      171: [7, 4],
      172: [7, 5],
      173: [7, 6],
      174: [7, 7],
      175: [7, 8],
      176: [7, 9],
      177: [6, 1],
      178: [6, 2],
      179: [6, 3],
      180: [6, 4],
      181: [6, 5],
      182: [6, 6],
      183: [6, 7],
      184: [6, 8],
      185: [5, 1],
      186: [5, 2],
      187: [5, 3],
      188: [5, 4],
      189: [5, 5],
      190: [5, 6],
      191: [5, 7],
      192: [4, 1],
      193: [4, 2],
      194: [4, 3],
      195: [4, 4],
      196: [4, 5],
      197: [3, 1],
      198: [3, 2],
      199: [3, 3],
    } as mapper,
    whole: {
      0: [23, 12],
      1: [23, 13],
      2: [23, 14],
      3: [23, 15],
      4: [22, 13],
      5: [22, 14],
      6: [22, 15],
      7: [22, 16],
      8: [22, 17],
      9: [21, 13],
      10: [21, 14],
      11: [21, 15],
      12: [21, 16],
      13: [21, 17],
      14: [21, 18],
      15: [21, 19],
      16: [20, 13],
      17: [20, 14],
      18: [20, 15],
      19: [20, 16],
      20: [20, 17],
      21: [20, 18],
      22: [20, 19],
      23: [20, 20],
      24: [19, 13],
      25: [19, 14],
      26: [19, 15],
      27: [19, 16],
      28: [19, 17],
      29: [19, 18],
      30: [19, 19],
      31: [19, 20],
      32: [19, 21],
      33: [18, 13],
      34: [18, 14],
      35: [18, 15],
      36: [18, 16],
      37: [18, 17],
      38: [18, 18],
      39: [18, 19],
      40: [18, 20],
      41: [18, 21],
      42: [17, 13],
      43: [17, 14],
      44: [17, 15],
      45: [17, 16],
      46: [17, 17],
      47: [17, 18],
      48: [17, 19],
      49: [17, 20],
      50: [17, 21],
      51: [17, 22],
      52: [16, 13],
      53: [16, 14],
      54: [16, 15],
      55: [16, 16],
      56: [16, 17],
      57: [16, 18],
      58: [16, 19],
      59: [16, 20],
      60: [16, 21],
      61: [16, 22],
      62: [15, 13],
      63: [15, 14],
      64: [15, 15],
      65: [15, 16],
      66: [15, 17],
      67: [15, 18],
      68: [15, 19],
      69: [15, 20],
      70: [15, 21],
      71: [15, 22],
      72: [15, 23],
      73: [14, 13],
      74: [14, 14],
      75: [14, 15],
      76: [14, 16],
      77: [14, 17],
      78: [14, 18],
      79: [14, 19],
      80: [14, 20],
      81: [14, 21],
      82: [14, 22],
      83: [14, 23],
      84: [13, 13],
      85: [13, 14],
      86: [13, 15],
      87: [13, 16],
      88: [13, 17],
      89: [13, 18],
      90: [13, 19],
      91: [13, 20],
      92: [13, 21],
      93: [13, 22],
      94: [13, 23],
      95: [12, 13],
      96: [12, 14],
      97: [12, 15],
      98: [12, 16],
      99: [12, 17],
      100: [12, 18],
      101: [12, 19],
      102: [12, 20],
      103: [12, 21],
      104: [12, 22],
      105: [12, 23],
      106: [11, 13],
      107: [11, 14],
      108: [11, 15],
      109: [11, 16],
      110: [11, 17],
      111: [11, 18],
      112: [11, 19],
      113: [11, 20],
      114: [11, 21],
      115: [11, 22],
      116: [11, 23],
      117: [10, 13],
      118: [10, 14],
      119: [10, 15],
      120: [10, 16],
      121: [10, 17],
      122: [10, 18],
      123: [10, 19],
      124: [10, 20],
      125: [10, 21],
      126: [10, 22],
      127: [10, 23],
      128: [9, 13],
      129: [9, 14],
      130: [9, 15],
      131: [9, 16],
      132: [9, 17],
      133: [9, 18],
      134: [9, 19],
      135: [9, 20],
      136: [9, 21],
      137: [9, 22],
      138: [9, 23],
      139: [8, 13],
      140: [8, 14],
      141: [8, 15],
      142: [8, 16],
      143: [8, 17],
      144: [8, 18],
      145: [8, 19],
      146: [8, 20],
      147: [8, 21],
      148: [8, 22],
      149: [7, 13],
      150: [7, 14],
      151: [7, 15],
      152: [7, 16],
      153: [7, 17],
      154: [7, 18],
      155: [7, 19],
      156: [7, 20],
      157: [7, 21],
      158: [7, 22],
      159: [6, 13],
      160: [6, 14],
      161: [6, 15],
      162: [6, 16],
      163: [6, 17],
      164: [6, 18],
      165: [6, 19],
      166: [6, 20],
      167: [6, 21],
      168: [5, 13],
      169: [5, 14],
      170: [5, 15],
      171: [5, 16],
      172: [5, 17],
      173: [5, 18],
      174: [5, 19],
      175: [5, 20],
      176: [5, 21],
      177: [4, 13],
      178: [4, 14],
      179: [4, 15],
      180: [4, 16],
      181: [4, 17],
      182: [4, 18],
      183: [4, 19],
      184: [4, 20],
      185: [3, 13],
      186: [3, 14],
      187: [3, 15],
      188: [3, 16],
      189: [3, 17],
      190: [3, 18],
      191: [3, 19],
      192: [2, 13],
      193: [2, 14],
      194: [2, 15],
      195: [2, 16],
      196: [2, 17],
      197: [1, 13],
      198: [1, 14],
      199: [1, 15],
    } as mapper,
    bonus: {
      0: [28, 2],
      1: [27, 4],
      2: [26, 6],
      3: [25, 8],
      4: [24, 10],
      5: [22, 11],
      6: [20, 12],
      7: [18, 13],
      8: [16, 14],
      9: [14, 14],
      10: [12, 14],
      11: [10, 13],
      12: [8, 12],
      13: [6, 11],
      14: [4, 10],
      15: [3, 8],
      16: [2, 6],
      17: [1, 4],
      18: [0, 2],
      19: [0, 0],
    } as mapper,
  },
};

export const map_from_flat_score = (
  side: keyof typeof mapper_index,
  type: keyof mapper_type,
  index: number
): [number, number] => {
  return mapper_index[side][type][index];
};
