
    let colors = [
  "Red", "Green", "Blue", "Pink", "Purple", "Cyan", "Orange", "Lime", "Magenta", "Yellow", "Coral", "Turquoise", 
  "Chocolate", "DarkGreen", "LightBlue", "Peach", "Lavender", "Plum", "SkyBlue", "SeaGreen", "Crimson", "Maroon", 
  "Olive", "Indigo", "Violet", "Gold", "Sapphire", "Teal", "Silver", "Aquamarine", "Periwinkle", "Turquoise", 
  "Salmon", "Tan", "Bronze", "Rose", "Burgundy", "Azure", "Mint", "Fuchsia", "Mauve", "Beige", "Wheat", "Ivory", 
  "Slate", "LavenderBlush", "PeachPuff", "Thistle", "PapayaWhip", "Linen", "AntiqueWhite", "AliceBlue", "GhostWhite", 
  "Honeydew", "MintCream", "Azure", "LightCyan", "Lavender", "LightPink", "DarkRed", "LightSalmon", "DarkOrange", 
  "LightCoral", "CornflowerBlue", "SlateBlue", "DarkSlateBlue", "SteelBlue", "RoyalBlue", "MediumBlue", "DodgerBlue", 
  "DeepSkyBlue", "SkyBlue", "LightSkyBlue", "PowderBlue", "CadetBlue", "LightSteelBlue", "MediumPurple", "BlueViolet", 
  "Indigo", "DarkOliveGreen", "OliveDrab", "DarkKhaki", "Khaki", "PaleGreen", "LightGreen", "ForestGreen", "DarkGreen", 
  "YellowGreen", "LimeGreen", "LawnGreen", "Chartreuse", "GreenYellow", "DarkViolet", "MediumOrchid", "DarkOrchid", 
  "Purple", "MediumPurple", "RebeccaPurple", "Orchid", "Magenta", "Fuchsia", "DeepPink", "HotPink", "LightPink", 
  "PaleVioletRed", "MediumVioletRed", "IndianRed", "Crimson", "FireBrick", "DarkRed", "Red", "DarkOrange", "Orange", 
  "Gold", "Yellow", "YellowGreen", "DarkGoldenrod", "Goldenrod", "LightGoldenrodYellow", "LemonChiffon", "LightYellow", 
  "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "LavenderBlush", "BlanchedAlmond", 
  "Bisque", "NavajoWhite", "Wheat", "Cornsilk", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "Seashell", 
  "GhostWhite", "Snow", "Honeydew", "MintCream", "Azure", "AliceBlue", "Lavender", "AliceBlue", "LightPink", "Salmon", 
  "DarkSalmon", "LightCoral", "Tomato", "Red", "Firebrick", "Crimson", "LightPink", "LavenderBlush", "MediumOrchid", 
  "DarkOrchid", "MediumPurple", "BlueViolet", "Violet", "MediumVioletRed", "DeepPink", "HotPink", "Fuchsia", "Magenta", 
  "LightMagenta", "PaleVioletRed", "RosyBrown", "IndianRed", "Firebrick", "Brown", "Maroon", "Olive", "DarkOliveGreen", 
  "OliveDrab", "YellowGreen", "GreenYellow", "DarkGreen", "ForestGreen", "DarkCyan", "Teal", "MediumAquaMarine", 
  "DarkTurquoise", "MediumTurquoise", "Turquoise", "LightSeaGreen", "SeaGreen", "MediumSeaGreen", "PaleGreen", 
  "LightGreen", "SpringGreen", "Lime", "LimeGreen", "YellowGreen", "DarkSeaGreen", "ForestGreen", "Chartreuse", 
  "LawnGreen", "MediumSpringGreen", "OliveDrab", "MediumOliveGreen", "LightSteelBlue", "SlateBlue", "DarkSlateBlue", 
  "MediumSlateBlue", "RoyalBlue", "CornflowerBlue", "SkyBlue", "DodgerBlue", "LightSkyBlue", "DeepSkyBlue", "MediumBlue", 
  "DarkBlue", "RoyalBlue", "LightCyan", "LightBlue", "AliceBlue", "Honeydew", "Lavender", "MistyRose", "LightSteelBlue", 
  "LightPink", "MediumPurple", "DarkCyan", "DarkSlateGray", "LightGoldenrod", "PaleTurquoise", "LightSalmon", 
  "DarkOliveGreen", "SpringGreen", "LightYellow", "MediumOrchid", "SlateGray", "MediumSlateBlue", "MidnightBlue", 
  "RoyalBlue", "DeepPink", "MediumSeaGreen", "Black", "White", "Gray", "Red", "Green", "Blue", "Cyan", "Magenta", 
  "Yellow", "Brown", "Pink", "Orange", "Violet", "Silver", "Gold", "Indigo", "Plum", "SeaShell", "Azure", "Ivory", 
  "Lime", "Purple", "Blue", "Green", "Crimson", "DarkSlateGray", "PaleVioletRed", "Snow", "Khaki", "PapayaWhip", 
  "LightSkyBlue", "PaleGoldenrod", "GreenYellow", "MediumSeaGreen", "MediumPurple", "DarkGreen", "MediumBlue", 
  "LightSalmon", "MediumAquaMarine", "PapayaWhip", "SeaGreen", "Coral", "Chocolate", "SkyBlue", "LightSeaGreen", 
  "DarkCyan", "FireBrick", "OliveDrab", "SteelBlue", "SlateBlue", "Violet", "MediumVioletRed", "ForestGreen", 
  "MediumOrchid", "Orchid", "HotPink", "DarkMagenta", "LightCyan", "MediumTurquoise", "SlateGray", "Turquoise", 
  "RoyalBlue", "Teal", "DarkOrange", "DarkOliveGreen", "MediumSpringGreen", "LimeGreen", "Honeydew", "DeepSkyBlue", 
  "MediumBlue", "SeaGreen", "LightBlue", "MediumSeaGreen", "Moccasin", "Wheat", "PapayaWhip", "IndianRed", 
  "MediumAquamarine", "Turquoise", "PaleVioletRed", "Chocolate", "PaleGreen", "SteelBlue", "DarkViolet", "SpringGreen", 
  "Goldenrod", "Green", "Lime", "RoyalBlue", "Crimson", "LightSteelBlue", "Olive", "MistyRose", "Peach", "MediumPink", 
  "GreenYellow", "LightSkyBlue", "DarkSeaGreen", "Orchid", "PapayaWhip", "Wheat", "DarkOliveGreen", "MediumOliveGreen", 
  "LightCoral", "Snow", "PaleTurquoise", "PowderBlue", "DeepPink", "LavenderBlush", "Aquamarine", "SlateBlue", "RosyBrown", 
  "MistyRose", "DarkKhaki", "Moccasin", "OliveDrab", "MidnightBlue", "SlateGray", "Lavender", "Seashell", "SteelBlue", 
  "LavenderBlush", "MistyRose", "CornflowerBlue", "Tomato", "Coral", "Teal", "Chocolate", "DeepPink", "SeaGreen", 
  "Violet", "LightGoldenrodYellow", "BlanchedAlmond", "Fuchsia", "Pink", "Orange", "Purple", "Lime", "YellowGreen", 
  "SpringGreen", "Gold", "DeepSkyBlue", "LimeGreen", "LightCyan", "DeepPink", "MediumSeaGreen", "Firebrick", "Olive", 
  "SlateBlue", "ForestGreen", "Honeydew", "MediumAquaMarine", "BlueViolet", "SandyBrown", "SpringGreen", "Cyan", "Maroon"
]

    let h1=document.querySelector("h1");
    let count=0;
    function changeBackgroundColor(){
        document.body.style.backgroundColor=colors[count];
        h1.textContent=colors[count];
        count++;
    }
    let data=setInterval(changeBackgroundColor,2000)
    function colorstop(){
        clearInterval(data);
    }
