export type Category = "sight" | "food" | "park" | "museum" | "campus";

export interface Spot {
  id: string;
  name: string;
  category: Category;
  description: string;
  latitude: number;
  longitude: number;
}

export const CATEGORY_EMOJI: Record<Category, string> = {
  sight: "🏰",
  food: "🥪",
  park: "🌳",
  museum: "🏛️",
  campus: "🎓",
};

export const SPOTS: Spot[] = [
  {
    id: "wawel",
    name: "Wawel Royal Castle",
    category: "sight",
    description: "The castle of Polish kings on a hill above the Vistula. Do not miss the dragon at the foot of the hill.",
    latitude: 50.054,
    longitude: 19.9354,
  },
  {
    id: "rynek",
    name: "Main Market Square",
    category: "sight",
    description: "One of the largest medieval squares in Europe, with the Cloth Hall in the middle and St Mary's Basilica.",
    latitude: 50.0617,
    longitude: 19.9373,
  },
  {
    id: "plac-nowy",
    name: "Plac Nowy",
    category: "food",
    description: "The heart of Kazimierz. Famous for zapiekanki, long open baguettes sold from the round building.",
    latitude: 50.0513,
    longitude: 19.9447,
  },
  {
    id: "planty",
    name: "Planty Park",
    category: "park",
    description: "A ring of green around the Old Town, where the city walls once stood. Perfect for a walk between classes.",
    latitude: 50.0614,
    longitude: 19.933,
  },
  {
    id: "kopiec",
    name: "Kościuszko Mound",
    category: "park",
    description: "An artificial hill with one of the best views of the city. On a clear day you can see the Tatra mountains.",
    latitude: 50.0549,
    longitude: 19.8933,
  },
  {
    id: "schindler",
    name: "Schindler's Factory",
    category: "museum",
    description: "A museum about Kraków during the Second World War, in the factory of Oskar Schindler.",
    latitude: 50.0474,
    longitude: 19.9614,
  },
  {
    id: "pk",
    name: "Cracow University of Technology",
    category: "campus",
    description: "The main campus on Warszawska Street. Your second home this semester.",
    latitude: 50.0711,
    longitude: 19.9439,
  },

  {
    id: "barbican",
    name: "Kraków Barbican",
    category: "sight",
    description: "A well-preserved medieval defensive structure that once protected the entrance to the Old Town.",
    latitude: 50.0655,
    longitude: 19.9409,
  },
  {
    id: "st-marys",
    name: "St. Mary's Basilica",
    category: "sight",
    description: "A beautiful Gothic church overlooking the Main Market Square, famous for its impressive wooden altarpiece and hourly trumpet signal.",
    latitude: 50.0617,
    longitude: 19.9392,
  },
  {
    id: "schindler-factory",
    name: "Ghetto Heroes Square",
    category: "sight",
    description: "A memorial square in Podgórze featuring empty metal chairs commemorating the victims of the Kraków Ghetto.",
    latitude: 50.0467,
    longitude: 19.9556,
  },
  {
    id: "kazimierz",
    name: "Kazimierz Jewish Quarter",
    category: "sight",
    description: "A historic district filled with synagogues, atmospheric streets, independent cafés and fascinating Jewish heritage.",
    latitude: 50.0515,
    longitude: 19.945,
  },
  {
    id: "botanical-garden",
    name: "Jagiellonian University Botanical Garden",
    category: "park",
    description: "A peaceful botanical garden featuring greenhouses, exotic plants and beautiful walking paths.",
    latitude: 50.0644,
    longitude: 19.9572,
  },
  {
    id: "blonia",
    name: "Błonia Park",
    category: "park",
    description: "A massive open green meadow near the city centre, popular for walking, cycling and outdoor activities.",
    latitude: 50.0605,
    longitude: 19.9078,
  },
  {
    id: "zakrzowek",
    name: "Zakrzówek Park",
    category: "park",
    description: "A spectacular former limestone quarry with turquoise water, wooden swimming platforms and walking trails.",
    latitude: 50.0356,
    longitude: 19.9155,
  },
  {
    id: "national-museum",
    name: "National Museum in Kraków",
    category: "museum",
    description: "One of Poland's largest museums, featuring Polish art, historical collections and rotating exhibitions.",
    latitude: 50.0614,
    longitude: 19.9234,
  },
  {
    id: "underground-museum",
    name: "Rynek Underground Museum",
    category: "museum",
    description: "An underground archaeological museum beneath the Main Market Square, exploring medieval Kraków through interactive exhibits.",
    latitude: 50.0618,
    longitude: 19.9374,
  },
  {
    id: "mocak",
    name: "MOCAK Museum of Contemporary Art",
    category: "museum",
    description: "A modern art museum located next to Schindler's Factory, showcasing contemporary Polish and international artists.",
    latitude: 50.0465,
    longitude: 19.9607,
  },
  {
    id: "obwarzanek",
    name: "Żywe Muzeum Obwarzanka",
    category: "food",
    description: "An interactive museum dedicated to Kraków's traditional ring-shaped bread, the obwarzanek. Learn how it is made.",
    latitude: 50.0651,
    longitude: 19.9386,
  },
  {
    id: "stary-kleparz",
    name: "Stary Kleparz Market",
    category: "food",
    description: "A traditional local market offering fresh produce, regional specialties, cheese, bread and other Polish delicacies.",
    latitude: 50.0665,
    longitude: 19.9401,
  },
  {
    id: "pk-czyzyny",
    name: "PK Czyżyny Campus",
    category: "campus",
    description: "The Czyżyny campus of Cracow University of Technology, home to several university faculties and teaching facilities.",
    latitude: 50.0767,
    longitude: 20.0054,
  },

];