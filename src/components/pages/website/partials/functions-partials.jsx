// get the url id parameter
export const getLagunaLakeBoundary = (item) => {
  let result = [
    {
      id: 1,
      type: "Feature",
      properties: { type: "I", name: "Central West Bay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.23, 14.38],
            [121.3, 14.42],
            [121.35, 14.4],
            [121.33, 14.34],
            [121.26, 14.33],
            [121.23, 14.38],
          ],
        ],
      },
    },
    {
      id: 2,
      type: "Feature",
      properties: { type: "II", name: "East Bay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.38, 14.3],
            [121.5, 14.35],
            [121.55, 14.28],
            [121.48, 14.22],
            [121.4, 14.24],
            [121.38, 14.3],
          ],
        ],
      },
    },
    {
      id: 3,
      type: "Feature",
      properties: { type: "IV", name: "Central Bay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.28, 14.32],
            [121.38, 14.36],
            [121.44, 14.3],
            [121.36, 14.24],
            [121.28, 14.32],
          ],
        ],
      },
    },
    {
      id: 4,
      type: "Feature",
      properties: { type: "V", name: "Northern West Bay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.23, 14.42],
            [121.3, 14.46],
            [121.36, 14.44],
            [121.34, 14.38],
            [121.26, 14.38],
            [121.23, 14.42],
          ],
        ],
      },
    },
    {
      id: 5,
      type: "Feature",
      properties: { type: "VIII", name: "South Bay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.22, 14.28],
            [121.3, 14.3],
            [121.36, 14.26],
            [121.38, 14.2],
            [121.34, 14.15],
            [121.28, 14.14],
            [121.22, 14.18],
            [121.2, 14.24],
            [121.22, 14.28],
          ],
        ],
      },
    },
    {
      id: 6,
      type: "Feature",
      properties: { type: "XIII", name: "Taytay" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.08, 14.42],
            [121.18, 14.45],
            [121.22, 14.4],
            [121.15, 14.37],
            [121.08, 14.42],
          ],
        ],
      },
    },
    {
      id: 7,
      type: "Feature",
      properties: { type: "XV", name: "San Pedro (West Bay)" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [120.96, 14.32],
            [121.04, 14.35],
            [121.08, 14.3],
            [121.0, 14.28],
            [120.96, 14.32],
          ],
        ],
      },
    },
    {
      id: 8,
      type: "Feature",
      properties: { type: "XVI", name: "Sta Rosa (West Bay)" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [120.98, 14.28],
            [121.06, 14.3],
            [121.1, 14.24],
            [121.02, 14.22],
            [120.98, 14.28],
          ],
        ],
      },
    },
    {
      id: 9,
      type: "Feature",
      properties: { type: "XVII", name: "Fish Sanctuary (Central Bay)" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.32, 14.3],
            [121.38, 14.33],
            [121.4, 14.28],
            [121.34, 14.26],
            [121.32, 14.3],
          ],
        ],
      },
    },
    {
      id: 10,
      type: "Feature",
      properties: { type: "XVIII", name: "Pagsanjan (East Bay)" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.32, 14.25],
            [121.4, 14.28],
            [121.44, 14.22],
            [121.36, 14.2],
            [121.32, 14.25],
          ],
        ],
      },
    },
    {
      id: 11,
      type: "Feature",
      properties: { type: "XIX", name: "Muntinlupa" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [120.96, 14.4],
            [121.05, 14.42],
            [121.08, 14.38],
            [121.02, 14.35],
            [120.96, 14.4],
          ],
        ],
      },
    },
    {
      id: 12,
      type: "Feature",
      properties: { type: "XX", name: "GEMS" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.1, 14.33],
            [121.18, 14.36],
            [121.22, 14.32],
            [121.14, 14.3],
            [121.1, 14.33],
          ],
        ],
      },
    },
    {
      id: 13,
      type: "Feature",
      properties: { type: "XXI", name: "Cardona" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.38, 14.38],
            [121.46, 14.4],
            [121.5, 14.35],
            [121.42, 14.33],
            [121.38, 14.38],
          ],
        ],
      },
    },
    {
      id: 14,
      type: "Feature",
      properties: { type: "XXII", name: "Jala-jala" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.48, 14.3],
            [121.56, 14.32],
            [121.6, 14.26],
            [121.52, 14.24],
            [121.48, 14.3],
          ],
        ],
      },
    },
    {
      id: 15,
      type: "Feature",
      properties: { type: "XXIII", name: "Lumban" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [121.38, 14.28],
            [121.46, 14.3],
            [121.5, 14.25],
            [121.42, 14.23],
            [121.38, 14.28],
          ],
        ],
      },
    },
  ];

  let newResult = result?.filter((a) => Number(a.id) == Number(item.id));

  return newResult;
};
// get the url id parameter
export const getMonitoringParameter = () => {
  let result = [
    {
      id: 1,
      name: "Dissolved Oxygen (DO)",
      img: "img/do.png",
      discription:
        "Dissolved Oxygen refers to the amount of oxygen available in water for fish and other aquatic organisms. LLDA monitors DO to assess the lake’s ability to support life. Low DO levels may indicate pollution, organic waste, or algal bloom decay, which can lead to fish stress or die-offs. A healthy DO level is typically above 5 mg/L.",
    },
    {
      id: 2,
      name: "pH Level",
      img: "img/ph.png",
      discription:
        "pH measures how acidic or alkaline the water is. LLDA tracks pH to ensure the lake remains within a safe range for aquatic life and human use. Laguna Lake generally maintains a pH between 6.5 and 8.5. Sudden changes may signal pollution or chemical discharge.",
    },
    {
      id: 3,
      name: "Biochemical Oxygen Demand (BOD)",
      img: "img/bod.png",
      discription:
        "BOD indicates the amount of oxygen required by microorganisms to decompose organic matter. LLDA uses BOD to evaluate pollution from sewage, agricultural runoff, or industrial waste. High BOD levels suggest poor water quality and reduced oxygen availability for aquatic life.",
    },
    {
      id: 4,
      name: "Chemical Oxygen Demand (COD)",
      img: "img/cod.png",
      discription:
        "COD measures the total oxygen needed to chemically oxidize organic and inorganic substances in water. LLDA monitors COD to detect pollution that may not be biodegradable. Elevated COD levels often point to industrial effluents or household waste entering the lake.",
    },
    {
      id: 5,
      name: "Turbidity",
      img: "img/turbidity.png",
      discription:
        "Turbidity reflects the cloudiness of water caused by suspended particles like silt, algae, or organic debris. LLDA tracks turbidity because high levels can block sunlight, disrupt aquatic habitats, and signal erosion or runoff. Clear water supports healthier ecosystems.",
    },
    {
      id: 6,
      name: "Temperature",
      img: "img/temp.png",
      discription:
        "Water temperature affects dissolved oxygen levels, fish metabolism, and algal growth. LLDA monitors temperature to detect thermal pollution and seasonal changes. High temperatures can reduce oxygen availability and stress aquatic organisms, especially in shallow areas.",
    },
    {
      id: 7,
      name: "Nitrate Phosphate Levels (NPL)",
      img: "img/npl.png",
      discription:
        "Nitrate and phosphate are nutrients that support aquatic plant growth. LLDA monitors these to prevent excessive nutrient loading, which can lead to eutrophication and harmful algal blooms. Balanced levels are essential for maintaining water quality and ecological stability.",
    },
  ];
  return result;
};
