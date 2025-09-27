 // --- DATA ---
            const savoryToppings = [
    // Original Toppings
    'Caramelized Onions', 'Smoked Suya', 'Yaji Spice Dust', 'Kilishi Jerky', 'Crispy Fried Egg', 'Hard-Boiled Egg', 'Sweet Plantain', 'Smoked Sardine', 'Grilled Shrimp', 'Creamy Mayonnaise', 'Classic Ketchup', 'Smoky BBQ Sauce', 'Grilled Steak', 'Suya Chicken', 'Spiced Beef', 'Akara Fritter', 'Roasted Corn', 'Crisp Lettuce', 'Fresh Spinach', 'Shredded Cabbage', 'Julienned Carrot',
    
    // Proteins & Meat
    'Cow Meat', 'Goat Meat', 'Turkey', 'Grilled Chicken', 'Fried Chicken', 'Asun', 'Bacon', 'Snail', 'Crab', 'Lobster', 'Peri Winkle', 'Pomo', 'Suya',
    
    // Fish & Seafood
    'Catfish', 'Croaker Fish', 'Tilapia Fish', 'Grilled Fish', 'Fried Fish', 'Fried Sardine', 'Fried Prawns', 'Stockfish', 'Dried Fish',
    
    // Eggs & Dairy
    'Boiled Egg', 'Fried Egg', 'Scrambled Egg',
    
    // Plantain & Starchy Vegetables
    'Fried Plantain', 'Boiled Plantain', 'Unripe Plantain', 'Plantain Chips', 'Boiled Yam', 'Fried Yam', 'Pounded Yam', 'Water Yam', 'Water Yam Fritters', 'Fried Potato', 'Sweet Potato',
    
    // Rice & Grains
    'White Rice', 'Coconut Rice', 'Ofada Rice', 'Fried Rice', 'Jollof Rice', 'Jollof Coconut Rice', 'Pineapple Fried Rice', 'Pineapple Jollof Rice', 'Jollof Beans', 'Tuwo Shinkafa', 'Massa',
    
    // Beans & Legumes
    'Boiled Beans', 'Baked Beans', 'Ewa Agoyin', 'Black Eyed Peas', 'Adalu',
    
    // Nigerian Staples
    'Fufu', 'Pounded Yam', 'Semo', 'Amala', 'Eba', 'Starch', 'Agidi', 'Akpu', 'Bole', 'Ukodo',
    
    // Soups & Stews
    'Egusi Soup', 'Okra Soup', 'Ewedu Soup', 'Gbegiri Soup', 'Afang Soup', 'Edikang Ikong', 'Bitterleaf Soup', 'Oha Soup', 'Ofe Oha', 'Ofe Owere', 'Ofe Owerri', 'Ofe Utazi', 'Ogbono Soup', 'White Soup', 'Pepper Soup', 'Fisherman Soup', 'Banga Soup', 'Atama Soup', 'Native Soup', 'Vegetable Soup', 'Eforiro', 'Stew', 'Ofada Stew', 'Banga Stew', 'Black Soup', 'Owo Soup', 'Ewedu Soup',
    
    // Nigerian Specials
    'Abacha (African Salad)', 'Nkwobi', 'Ekpang Nkukwo', 'Ekuru', 'Okpa', 'Onunu', 'Akidi', 'Echere', 'Echicha', 'Kekefia', 'Fiofio',
    
    // Vegetables & Greens
    'Ugwu Leaves', 'Waterleaf', 'Spinach', 'Bitter Leaf', 'Pumpkin Leaves', 'Garden Egg', 'Mushrooms', 'Okra', 'Tomatoes', 'Bell Peppers',
    
    // Spices & Seasonings
    'Suya Spice', 'Pepper', 'Ginger', 'Garlic', 'Crayfish', 'Locust Beans', 'Palm Oil', 'Groundnut Oil', 'Scotch Bonnet',
    
    // Nigerian Snacks & Sides
    'Chin Chin', 'Puff Puff', 'Akara', 'Buns', 'Donut', 'Roasted Corn', 'Tiger Nuts', 'Coconut', 'Groundnuts',
    
    // Sauces & Condiments
    'Spicy Sauce', 'Garden Egg Sauce', 'Egg Sauce', 'Tomato Stew', 'Palm Nut Sauce',
    
    // Sausages & Processed Meats
    'Boiled Sausage', 'Fried Sausage', 'Grilled Sausage', 'Corned Beef',
    
    // Bread & Pastries
    'Agege Bread', 'Meat Pie', 'Fish Pie', 'Chicken Pie', 'Sausage Roll', 'Egg Roll', 'Scotch Roll', 'Fish Roll', 'Spring Rolls', 'Samosa',
    
    // Pasta & Grains
    'Noodles', 'Spaghetti', 'Jollof Spaghetti', 'Meat Balls',
    
    // Drinks & Beverages
    'Zobo', 'Tiger Nuts Juice', 'Kunu', 'Palm Wine', 'Fura da Nono', 'Pap',
    
    // Smoothies
    'Apple Smoothie', 'Orange Smoothie', 'Pineapple Smoothie', 'Banana Smoothie', 'Grape Smoothie', 'Strawberry Smoothie', 'Tangerine Smoothie',
    
    // International Items
    'Pizza', 'Cheese', 'Lettuce', 'Cabbage', 'Carrots', 'Cucumber', 'Avocado', 'Parfait'
];
            
const sweetToppings = ['White Chocolate Curls', 'Dark Chocolate Shavings', 'Milk Chocolate Chunks', 'Snickers Pieces', "M&M's", 'Smarties', 'Crushed Oreos', 'Fresh Banana Blend', 'Spiced Apple Blend'];
const pancakeToppings = ['Maple Syrup', 'Honey', 'Chocolate Sauce', 'Fresh Berries', 'Whipped Cream'];
const moiMoiToppings = ['Smoked Sardine', 'Hard-Boiled Egg', 'Corned Beef'];
const friesToppings = ['Yaji Spice Dust', 'Ketchup', 'Mayonnaise', 'Smoky BBQ Sauce'];
// Specialized Topping Arrays
const soupToppings = [
    'Stockfish', 'Dried Fish', 'Catfish', 'Croaker Fish', 'Tilapia Fish', 'Snail', 'Crab', 'Prawns',
    'Cow Meat', 'Goat Meat', 'Turkey', 'Chicken', 'Beef', 'Pomo',
    'Hard-Boiled Egg', 'Boiled Egg',
    'Ugwu Leaves', 'Waterleaf', 'Spinach', 'Bitter Leaf', 'Pumpkin Leaves',
    'Crayfish', 'Locust Beans', 'Palm Oil', 'Pepper', 'Scotch Bonnet',
    'Fried Plantain', 'Yam'
];

const riceToppings = [
    'Fried Chicken', 'Grilled Chicken', 'Turkey', 'Beef', 'Goat Meat', 'Prawns', 'Fish',
    'Hard-Boiled Egg', 'Fried Egg', 'Boiled Egg',
    'Fried Plantain', 'Sweet Plantain', 'Green Peas', 'Carrots', 'Green Beans',
    'Coconut Flakes', 'Raisins', 'Cashews', 'Groundnuts',
    'Dodo (Fried Plantain)', 'Coleslaw', 'Salad'
];

const swallowToppings = [
    'Egusi Soup', 'Okra Soup', 'Ewedu Soup', 'Gbegiri Soup', 'Afang Soup', 
    'Bitterleaf Soup', 'Oha Soup', 'Ogbono Soup', 'White Soup', 'Pepper Soup',
    'Vegetable Soup', 'Eforiro', 'Banga Soup', 'Atama Soup', 'Native Soup'
];

const meatToppings = [
    'Extra Meat Portions', 'Cow Meat', 'Goat Meat', 'Turkey', 'Chicken',
    'Fried Plantain', 'Yam', 'Potatoes',
    'Pepper Sauce', 'Tomato Stew', 'Onions', 'Bell Peppers',
    'Ugwu Leaves', 'Cabbage', 'Lettuce'
];

const snackToppings = [
    'Pepper Sauce', 'Tomato Sauce', 'Mayonnaise', 'Ketchup',
    'Fried Plantain', 'Yam', 'Bread',
    'Coleslaw', 'Salad', 'Cucumber', 'Tomatoes'
];

const drinkToppings = [
    // Ice & Temperature
    'Ice Cubes', 'Crushed Ice', 'Flavored Ice Cubes', 'Frozen Fruit Cubes',
    
    // Nigerian Tropical Fruits
    'Pineapple Chunks', 'Pineapple Slices', 'Mango Chunks', 'Papaya (Pawpaw)', 'Banana Slices', 'Plantain', 'Coconut Water', 'Fresh Coconut', 'Coconut Flakes', 'Watermelon', 'Orange Slices', 'Orange Segments', 'Tangerine', 'Lime Slices', 'Lime Wedges', 'Lemon Slices', 'Lemon Wedges', 'Guava', 'Soursop', 'Custard Apple', 'African Star Apple (Agbalumo)', 'Cashew Apple', 'African Pear (Ube)',
    
    // International Fruits
    'Strawberries', 'Blueberries', 'Raspberries', 'Blackberries', 'Apple Slices', 'Grapes', 'Kiwi Slices', 'Passion Fruit', 'Dragon Fruit', 'Cherries', 'Peaches', 'Apricots',
    
    // Dried Fruits & Nuts
    'Dates', 'Raisins', 'Dried Cranberries', 'Dried Mango', 'Tiger Nuts', 'Groundnuts', 'Cashew Nuts', 'Almonds', 'Walnuts', 'Coconut Chips',
    
    // Fresh Herbs & Aromatics
    'Mint Leaves', 'Fresh Mint', 'Basil Leaves', 'Scent Leaf', 'Lemon Balm', 'Cucumber Slices', 'Cucumber Ribbons', 'Fresh Ginger', 'Ginger Slices', 'Turmeric Root', 'Lemongrass', 'Thyme', 'Rosemary', 'Cilantro', 'Parsley',
    
    // Nigerian Drink Enhancers
    'Hibiscus Flowers', 'Zobo Leaves', 'Cloves', 'Nutmeg', 'Cinnamon Sticks', 'Garlic (for health drinks)', 'Bitter Kola', 'Kola Nuts', 'Uda Seeds', 'Ehuru Seeds', 'Uziza Seeds', 'Cameroon Pepper', 'Negro Pepper',
    
    // Sweeteners
    'Honey', 'Pure Honey', 'Wild Honey', 'Brown Sugar', 'White Sugar', 'Palm Sugar', 'Coconut Sugar', 'Date Syrup', 'Maple Syrup', 'Agave Syrup', 'Stevia', 'Artificial Sweeteners',
    
    // Dairy & Creamy Additions
    'Milk', 'Evaporated Milk', 'Condensed Milk', 'Coconut Milk', 'Almond Milk', 'Soy Milk', 'Oat Milk', 'Heavy Cream', 'Whipped Cream', 'Ice Cream Scoops', 'Yogurt', 'Greek Yogurt',
    
    // Spices & Flavor Enhancers
    'Vanilla Extract', 'Almond Extract', 'Cinnamon Powder', 'Cocoa Powder', 'Matcha Powder', 'Turmeric Powder', 'Ginger Powder', 'Cardamom', 'Star Anise', 'Allspice', 'Black Pepper', 'Cayenne Pepper',
    
    // Protein Additions (for smoothies)
    'Protein Powder', 'Peanut Butter', 'Almond Butter', 'Cashew Butter', 'Chia Seeds', 'Flax Seeds', 'Hemp Seeds', 'Spirulina', 'Moringa Powder', 'Baobab Powder',
    
    // Syrups & Liquid Flavoring
    'Chocolate Syrup', 'Caramel Syrup', 'Strawberry Syrup', 'Vanilla Syrup', 'Hazelnut Syrup', 'Coconut Syrup', 'Rose Water', 'Orange Blossom Water', 'Pineapple Juice', 'Orange Juice', 'Apple Juice', 'Cranberry Juice', 'Pomegranate Juice',
    
    // Bubbles & Texture
    'Tapioca Pearls', 'Boba Pearls', 'Popping Boba', 'Jelly Cubes', 'Aloe Vera', 'Basil Seeds', 'Chia Gel', 'Coconut Jelly',
    
    // Garnishes & Decorative
    'Edible Flowers', 'Citrus Zest', 'Orange Zest', 'Lemon Zest', 'Lime Zest', 'Coconut Rim', 'Sugar Rim', 'Salt Rim', 'Colored Sugar', 'Sprinkles', 'Umbrella Picks', 'Fruit Skewers',
    
    // Alcohol (for adult beverages)
    'Rum', 'Vodka', 'Gin', 'Whiskey', 'Wine', 'Champagne', 'Beer', 'Palm Wine', 'Local Spirits',
    
    // Health Boosters
    'Vitamin C Tablets', 'Multivitamin', 'Apple Cider Vinegar', 'Lemon Juice', 'Lime Juice', 'Ginger Shots', 'Wheatgrass', 'Green Tea', 'Hibiscus Tea',
    
    // Savory Drink Additions
    'Tomato Juice', 'Celery Sticks', 'Pickle Juice', 'Hot Sauce', 'Worcestershire Sauce', 'Soy Sauce', 'Fish Sauce',
    
    // Coffee & Tea Enhancers
    'Coffee Beans', 'Espresso Shots', 'Tea Leaves', 'Green Tea', 'Black Tea', 'Herbal Tea', 'Rooibos', 'Chamomile', 'Peppermint Tea',
    
    // Exotic Nigerian Additions
    'Ukwa (African Breadfruit)', 'Aidan Fruit', 'African Potato', 'Bush Mango Seeds', 'Bitter Leaf Extract', 'Scent Leaf Extract'
];

const pastrySweetToppings = [
    // Sweet Sauces & Syrups
    'Honey', 'Pure Honey', 'Wild Honey', 'Chocolate Sauce', 'Dark Chocolate Sauce', 'White Chocolate Sauce', 'Caramel Sauce', 'Butterscotch Sauce', 'Strawberry Syrup', 'Vanilla Syrup', 'Maple Syrup', 'Golden Syrup', 'Agave Syrup', 'Date Syrup', 'Palm Wine Syrup',
    
    // Creams & Dairy
    'Whipped Cream', 'Heavy Cream', 'Double Cream', 'Custard', 'Vanilla Custard', 'Pastry Cream', 'Mascarpone', 'Cream Cheese Frosting', 'Buttercream', 'Ice Cream', 'Yogurt', 'Greek Yogurt',
    
    // Nigerian Tropical Fruits
    'Pineapple', 'Mango', 'Papaya (Pawpaw)', 'Banana', 'Plantain', 'Coconut', 'Coconut Flakes', 'Toasted Coconut', 'Watermelon', 'Orange Segments', 'Tangerine', 'Lime Zest', 'Lemon Zest', 'Guava', 'Soursop', 'Custard Apple', 'African Star Apple (Agbalumo)', 'African Pear (Ube)', 'Cashew Apple',
    
    // International Fruits
    'Strawberries', 'Blueberries', 'Raspberries', 'Blackberries', 'Apple Slices', 'Pear Slices', 'Grapes', 'Kiwi', 'Passion Fruit', 'Dragon Fruit', 'Cherries', 'Peaches', 'Apricots',
    
    // Dried Fruits
    'Raisins', 'Dried Cranberries', 'Dried Apricots', 'Dried Mango', 'Dried Pineapple', 'Dried Banana Chips', 'Dried Coconut', 'Dates', 'Figs', 'Prunes',
    
    // Nuts & Seeds
    'Groundnuts (Peanuts)', 'Roasted Groundnuts', 'Cashew Nuts', 'Tiger Nuts', 'Almonds', 'Walnuts', 'Pecans', 'Hazelnuts', 'Pistachios', 'Macadamia Nuts', 'Pumpkin Seeds', 'Sunflower Seeds', 'Sesame Seeds', 'Chia Seeds', 'Flax Seeds',
    
    // Chocolate & Candy
    'Dark Chocolate Chips', 'Milk Chocolate Chips', 'White Chocolate Chips', 'Chocolate Shavings', 'Cocoa Powder', 'Nutella', 'Peanut Butter', 'Almond Butter', 'Cashew Butter', 'M&Ms', 'Smarties', 'Crushed Oreos', 'Snickers Pieces', 'Kit Kat Pieces', 'Marshmallows', 'Mini Marshmallows',
    
    // Spices & Flavorings
    'Vanilla Extract', 'Cinnamon', 'Nutmeg', 'Cardamom', 'Ginger Powder', 'Cloves', 'Allspice', 'Orange Blossom Water', 'Rose Water', 'Mint Extract', 'Almond Extract', 'Rum Extract',
    
    // Nigerian Sweet Additions
    'Palm Sugar', 'Brown Sugar', 'Coconut Sugar', 'Chin Chin Crumbs', 'Puff Puff Pieces', 'Groundnut Paste', 'Coconut Milk', 'Palm Kernel Oil', 'Benne Seed (Sesame)', 'Locust Bean Pods',
    
    // Sugars & Powders
    'Powdered Sugar', 'Brown Sugar', 'Raw Sugar', 'Coconut Sugar', 'Caster Sugar', 'Demerara Sugar', 'Muscovado Sugar', 'Icing Sugar',
    
    // Jams & Preserves
    'Strawberry Jam', 'Apricot Jam', 'Orange Marmalade', 'Mixed Fruit Jam', 'Pineapple Jam', 'Mango Jam', 'Guava Jelly', 'Honey Butter', 'Lemon Curd',
    
    // Crunchy Additions
    'Granola', 'Muesli', 'Cornflakes', 'Rice Crispies', 'Chopped Nuts', 'Toffee Bits', 'Caramel Bits', 'Sprinkles', 'Edible Glitter', 'Candied Ginger', 'Candied Orange Peel',
    
    // Tropical & Exotic
    'Baobab Powder', 'Moringa Powder', 'Hibiscus Powder', 'Tamarind Paste', 'Ginger Jam', 'Plantain Chips (sweet)', 'Banana Chips',
    
    // Alcoholic Flavoring (for adults)
    'Rum', 'Brandy', 'Baileys', 'Kahlua', 'Amaretto', 'Grand Marnier',
    
    // Fresh Herbs (for unique flavoring)
    'Fresh Mint', 'Basil', 'Lemon Balm', 'Lavender'
];

const noodlePastaToppings = [
    // Proteins & Meats
    'Grilled Chicken', 'Fried Chicken', 'Suya Chicken', 'Chicken Strips', 'Turkey', 'Ground Beef', 'Beef Strips', 'Suya Beef', 'Goat Meat', 'Asun', 'Bacon', 'Ham', 'Sausage', 'Pepperoni', 'Corned Beef', 'Meatballs', 'Italian Sausage',
    
    // Seafood
    'Prawns', 'Shrimp', 'Crab Meat', 'Lobster', 'Tuna', 'Salmon', 'Sardines', 'Smoked Fish', 'Catfish', 'Tilapia', 'Croaker Fish', 'Anchovies', 'Scallops',
    
    // Eggs & Dairy
    'Hard-Boiled Egg', 'Fried Egg', 'Scrambled Egg', 'Poached Egg', 'Quail Eggs', 'Parmesan Cheese', 'Mozzarella', 'Cheddar Cheese', 'Goat Cheese', 'Ricotta', 'Feta Cheese', 'Cream Cheese', 'Heavy Cream',
    
    // Nigerian Vegetables
    'Ugwu Leaves', 'Spinach', 'Waterleaf', 'Bitter Leaf', 'Pumpkin Leaves', 'Scent Leaf', 'Garden Egg', 'Okra', 'Bell Peppers', 'Scotch Bonnet', 'Tomatoes', 'Cherry Tomatoes', 'Onions', 'Spring Onions', 'Leeks',
    
    // International Vegetables
    'Mushrooms', 'Shiitake Mushrooms', 'Button Mushrooms', 'Carrots', 'Green Peas', 'Snow Peas', 'Baby Corn', 'Sweet Corn', 'Broccoli', 'Cauliflower', 'Zucchini', 'Eggplant', 'Asparagus', 'Artichokes', 'Sun-dried Tomatoes',
    
    // Herbs & Aromatics
    'Garlic', 'Fresh Ginger', 'Basil', 'Oregano', 'Thyme', 'Rosemary', 'Parsley', 'Cilantro', 'Bay Leaves', 'Sage', 'Mint', 'Chives', 'Dill',
    
    // Pasta Sauces & Bases
    'Tomato Sauce', 'Marinara', 'Alfredo Sauce', 'Pesto', 'Carbonara Sauce', 'Bolognese', 'Arrabbiata', 'Aglio e Olio', 'Butter Sauce', 'Olive Oil', 'Palm Oil', 'Coconut Milk', 'Heavy Cream Sauce',
    
    // Nigerian-Style Additions
    'Plantain Slices', 'Fried Plantain', 'Yam Cubes', 'Sweet Potato', 'Coconut Flakes', 'Groundnuts', 'Palm Nuts', 'Locust Beans', 'Crayfish', 'Dried Fish Flakes',
    
    // Spices & Seasonings
    'Yaji Spice', 'Suya Spice', 'Black Pepper', 'White Pepper', 'Paprika', 'Chili Flakes', 'Curry Powder', 'Turmeric', 'Cumin', 'Coriander', 'Nutmeg', 'Cinnamon',
    
    // Nuts & Seeds
    'Pine Nuts', 'Cashew Nuts', 'Almonds', 'Walnuts', 'Sesame Seeds', 'Pumpkin Seeds', 'Sunflower Seeds', 'Melon Seeds',
    
    // Olives & Pickled Items
    'Black Olives', 'Green Olives', 'Kalamata Olives', 'Capers', 'Pickled Peppers', 'Pickled Onions',
    
    // Fruits (Pasta-Friendly)
    'Lemon Zest', 'Lime Zest', 'Orange Zest', 'Dried Cranberries', 'Raisins', 'Cherry Tomatoes', 'Grapes',
    
    // Asian Noodle Additions
    'Bean Sprouts', 'Bok Choy', 'Napa Cabbage', 'Bamboo Shoots', 'Water Chestnuts', 'Tofu', 'Tempeh', 'Seaweed', 'Sesame Oil', 'Soy Sauce', 'Oyster Sauce', 'Fish Sauce',
    
    // Specialty Additions
    'Roasted Red Peppers', 'Grilled Vegetables', 'Caramelized Onions', 'Truffle Oil', 'Balsamic Reduction', 'Lemon Juice', 'Lime Juice', 'Wine Reduction', 'Chicken Stock', 'Vegetable Broth'
];

const saladToppings = [
    // Proteins
    'Grilled Chicken', 'Turkey', 'Boiled Egg', 'Cheese', 'Prawns', 'Tuna', 'Smoked Fish', 'Hard-Boiled Egg',
    
    // Nigerian Leafy Vegetables
    'Lettuce', 'Spinach', 'Cabbage', 'Ugwu Leaves', 'Waterleaf', 'Bitter Leaf', 'Pumpkin Leaves', 'Scent Leaf', 'Mint Leaves', 'Basil', 'Parsley',
    
    // Common Vegetables
    'Tomatoes', 'Cucumber', 'Carrots', 'Bell Peppers', 'Red Bell Peppers', 'Yellow Bell Peppers', 'Green Bell Peppers', 'Onions', 'Red Onions', 'Spring Onions', 'Garden Egg', 'Okra', 'Green Beans', 'Sweet Corn', 'Baby Corn', 'Mushrooms', 'Radish', 'Celery', 'Beetroot',
    
    // Nigerian Tropical Fruits
    'Pineapple', 'Mango', 'Papaya (Pawpaw)', 'Banana', 'Plantain', 'Coconut', 'Watermelon', 'Orange', 'Tangerine', 'Lime', 'Lemon', 'Grapefruit', 'Avocado', 'Guava', 'Soursop', 'Custard Apple', 'African Star Apple (Agbalumo)', 'African Pear (Ube)', 'Cashew Apple', 'Palm Fruit',
    
    // International Fruits
    'Apple', 'Grapes', 'Strawberries', 'Blueberries', 'Kiwi', 'Passion Fruit', 'Dragon Fruit',
    
    // Herbs & Aromatics
    'Ginger', 'Garlic', 'Chives', 'Coriander', 'Thyme', 'Rosemary', 'Bay Leaves',
    
    // Seeds & Nuts
    'Groundnuts (Peanuts)', 'Cashew Nuts', 'Tiger Nuts', 'Pumpkin Seeds', 'Sunflower Seeds', 'Sesame Seeds', 'Melon Seeds',
    
    // Dressings & Condiments
    'Mayonnaise', 'Ranch Dressing', 'Vinaigrette', 'Olive Oil', 'Palm Oil', 'Honey', 'Lemon Juice', 'Lime Juice',
    
    // Extras
    'Croutons', 'Cheese Cubes', 'Feta Cheese', 'Olives', 'Cherry Tomatoes', 'Sun-dried Tomatoes', 'Dried Fruits', 'Raisins'
];

const sandwichToppings = [
    // Proteins
    'Grilled Chicken', 'Fried Chicken', 'Suya Chicken', 'Turkey', 'Beef', 'Suya Beef', 'Ham', 'Corned Beef', 'Tuna', 'Sardines', 'Smoked Fish', 'Prawns', 'Hard-Boiled Egg', 'Fried Egg', 'Scrambled Egg', 'Akara', 'Moi Moi',
    
    // Cheese & Dairy
    'Cheese', 'Cheddar Cheese', 'Mozzarella', 'Cream Cheese', 'Butter', 'Margarine',
    
    // Nigerian Vegetables
    'Lettuce', 'Spinach', 'Cabbage', 'Ugwu Leaves', 'Waterleaf', 'Scent Leaf', 'Tomatoes', 'Cucumber', 'Carrots', 'Bell Peppers', 'Red Bell Peppers', 'Green Bell Peppers', 'Onions', 'Red Onions', 'Spring Onions', 'Garden Egg', 'Sweet Corn', 'Mushrooms', 'Beetroot', 'Radish',
    
    // Sandwich-Friendly Fruits
    'Avocado', 'Banana', 'Apple Slices', 'Pineapple', 'Mango Slices', 'Orange Slices', 'Strawberries', 'Grapes',
    
    // Nigerian Additions
    'Fried Plantain', 'Sweet Plantain', 'Yam Slices', 'Potato Slices', 'Coconut Flakes', 'Groundnuts', 'Chin Chin Crumbs',
    
    // Herbs & Aromatics
    'Basil', 'Parsley', 'Mint Leaves', 'Cilantro', 'Thyme', 'Ginger', 'Garlic',
    
    // Sauces & Condiments
    'Mayonnaise', 'Mustard', 'Ketchup', 'BBQ Sauce', 'Pepper Sauce', 'Yaji Spice', 'Honey', 'Peanut Butter', 'Jam', 'Nutella', 'Olive Oil', 'Palm Oil Spread', 'Suya Sauce',
    
    // Pickled & Preserved
    'Pickles', 'Olives', 'Sun-dried Tomatoes', 'Pickled Onions', 'Pickled Peppers',
    
    // Crunchy Additions
    'Lettuce', 'Cucumber', 'Carrots', 'Bell Peppers', 'Groundnuts', 'Cashew Nuts', 'Tiger Nuts', 'Sesame Seeds', 'Pumpkin Seeds',
    
    // Bread Enhancements
    'Garlic Butter', 'Herb Butter', 'Toasted Coconut', 'Fried Onions'
];

const pizzaToppings = [
    // Proteins & Meats
    'Pepperoni', 'Grilled Chicken', 'Fried Chicken', 'Suya Chicken', 'BBQ Chicken', 'Beef', 'Suya Beef', 'Ground Beef', 'Turkey', 'Ham', 'Bacon', 'Sausage', 'Corned Beef', 'Goat Meat', 'Asun (Spiced Goat)', 'Kilishi', 'Smoked Fish', 'Tuna', 'Sardines', 'Prawns', 'Shrimp', 'Crab Meat', 'Snail',
    
    // Cheese Varieties
    'Mozzarella', 'Cheddar Cheese', 'Parmesan', 'Goat Cheese', 'Feta Cheese', 'Extra Cheese', 'Cheese Blend',
    
    // Vegetables
    'Mushrooms', 'Bell Peppers', 'Red Bell Peppers', 'Yellow Bell Peppers', 'Green Bell Peppers', 'Onions', 'Red Onions', 'Caramelized Onions', 'Spring Onions', 'Tomatoes', 'Cherry Tomatoes', 'Sun-dried Tomatoes', 'Garden Egg', 'Spinach', 'Ugwu Leaves', 'Sweet Corn', 'Baby Corn', 'Olives', 'Black Olives', 'Green Olives', 'Jalapeños', 'Scotch Bonnet', 'Cucumber', 'Avocado', 'Artichokes',
    
    // Nigerian-Friendly Fruits
    'Pineapple', 'Mango', 'Banana', 'Plantain', 'Apple', 'Coconut Flakes', 'Grapes',
    
    // Herbs & Aromatics
    'Basil', 'Oregano', 'Thyme', 'Rosemary', 'Parsley', 'Cilantro', 'Scent Leaf', 'Garlic', 'Ginger',
    
    // Nigerian Spices & Sauces
    'Yaji Spice', 'Suya Spice', 'Pepper Flakes', 'Palm Oil Drizzle', 'Pepper Sauce', 'BBQ Sauce', 'Hot Sauce', 'Garlic Sauce',
    
    // Seeds & Nuts
    'Sesame Seeds', 'Pumpkin Seeds', 'Groundnuts', 'Cashew Nuts',
    
    // Specialty Additions
    'Fried Plantain', 'Roasted Corn', 'Hard-Boiled Egg', 'Akara Bits', 'Capers', 'Anchovies',
    
    // Vegetarian Proteins
    'Tofu', 'Tempeh', 'Chickpeas', 'Black Beans',
    
    // Extra Flavor Enhancers
    'Truffle Oil', 'Chili Oil', 'Herb Oil', 'Balsamic Glaze', 'Ranch Dressing', 'Honey Drizzle'
];

const burgerToppings = [
    // Protein Patties & Meats
    'Extra Beef Patty', 'Double Beef Patty', 'Grilled Chicken', 'Fried Chicken', 'Chicken Breast', 'Suya Chicken', 'Turkey Patty', 'Fish Fillet', 'Grilled Fish', 'Prawns', 'Bacon', 'Ham', 'Sausage Patty', 'Corned Beef', 'Suya Beef', 'Goat Meat Patty', 'Akara Patty', 'Vegetarian Patty',
    
    // Cheese Varieties
    'Cheddar Cheese', 'Mozzarella', 'Swiss Cheese', 'Goat Cheese', 'Cheese Slices', 'Melted Cheese', 'Blue Cheese', 'Pepper Jack',
    
    // Fresh Vegetables
    'Lettuce', 'Iceberg Lettuce', 'Spinach', 'Arugula', 'Cabbage', 'Red Cabbage', 'Tomatoes', 'Cherry Tomatoes', 'Cucumber', 'Onions', 'Red Onions', 'Grilled Onions', 'Caramelized Onions', 'Bell Peppers', 'Roasted Peppers', 'Jalapeños', 'Scotch Bonnet', 'Avocado', 'Mushrooms', 'Grilled Mushrooms', 'Garden Egg',
    
    // Nigerian Vegetables & Greens
    'Ugwu Leaves', 'Waterleaf', 'Scent Leaf', 'Bitter Leaf (small portions)', 'Spring Onions',
    
    // Pickled & Preserved Items
    'Pickles', 'Pickled Onions', 'Pickled Peppers', 'Pickled Cucumber', 'Olives', 'Sun-dried Tomatoes',
    
    // Nigerian-Style Sides
    'Fried Plantain', 'Sweet Plantain', 'Grilled Plantain', 'Yam Fries', 'Sweet Potato Fries', 'Potato Wedges', 'Fried Yam', 'Boiled Yam Slices', 'Roasted Corn', 'Coconut Flakes',
    
    // Eggs
    'Fried Egg', 'Scrambled Egg', 'Hard-Boiled Egg Slices',
    
    // Sauces & Condiments
    'Mayonnaise', 'Garlic Mayo', 'Spicy Mayo', 'Ketchup', 'Mustard', 'Honey Mustard', 'BBQ Sauce', 'Hot Sauce', 'Pepper Sauce', 'Suya Sauce', 'Yaji Spice', 'Ranch Dressing', 'Thousand Island', 'Chipotle Sauce', 'Garlic Sauce', 'Honey', 'Sriracha',
    
    // Crunchy Additions
    'Crispy Onions', 'Onion Rings', 'Fried Shallots', 'Groundnuts', 'Cashew Nuts', 'Sesame Seeds', 'Chin Chin Crumbs', 'Plantain Chips', 'Tortilla Strips',
    
    // Fresh Herbs
    'Basil', 'Cilantro', 'Parsley', 'Mint', 'Thyme',
    
    // Fruits (Burger-Friendly)
    'Pineapple Rings', 'Grilled Pineapple', 'Apple Slices', 'Mango Slices', 'Banana Slices',
    
    // Spreads & Butters
    'Butter', 'Garlic Butter', 'Herb Butter', 'Peanut Butter', 'Avocado Spread', 'Cream Cheese',
    
    // Specialty Items
    'Hash Browns', 'Coleslaw', 'Guacamole', 'Hummus', 'Pesto', 'Caramelized Banana', 'Grilled Halloumi'
];

   const menuData = {
    // Mexican/International Mains
    taco: { 
        name: 'The Beloved Taco',
        aliases: ['taco', 'beloved', 'classic', 'mexican', 'tortilla'],
        image: 'assets/food/taco.png',
        prices: { big: 5000, bigger: 8000, biggest: 10000 },
        toppings: meatToppings,
        category: 'mains',
        order: 1,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">They say you can't improve on a classic. I disagree. This recipe was born from a dozen late-night arguments in a Lagos kitchen, a quest to find the perfect balance between the familiar and the divine. Each spice was chosen not just for its taste, but for the story it tells. This isn't just a taco. It's a conversation; a taste of home, whispered in a new language.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    egusisoup: {
        name: 'The Orishirishi Egusi',
        aliases: ['egusi', 'soup', 'egusi soup', 'melon soup', 'royal'],
        image: 'assets/food/egusi.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: soupToppings,
        category: 'mains',
        order: 2,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">In the heart of every Nigerian kitchen lies this golden treasure. Ground melon seeds transformed into liquid silk, enriched with the wisdom of generations. Each spoonful carries the warmth of home and the comfort of tradition. This is not just soup—it's heritage in a bowl.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    burger: {
        name: 'The BBL Burger',
        aliases: ['burger', 'bbl', 'beef', 'patty', 'american', 'hamburger'],
        image: 'assets/food/burger.png',
        prices: { big: 6000, bigger: 9000, biggest: 12000 },
        toppings: burgerToppings,
        category: 'mains',
        order: 3,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">This is not a burger. This is architecture. A tower of flavor, engineered for maximum satisfaction. We flame-grill the patty to seal in the juices, then build upon that foundation with layers of texture and taste. It's a handful of happiness, a monument to the art of the grill.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    spaghetti: {
        name: 'The Strands della Foresta',
        aliases: ['spaghetti', 'strands', 'foresta', 'pasta', 'italian', 'noodles'],
        image: 'assets/food/spaghetti.png',
        prices: { big: 5500, bigger: 8500, biggest: 11000 },
        toppings: noodlePastaToppings,
        category: 'mains',
        order: 4,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A recipe found in a journal from a traveler who got lost in the deep woods of Italy, only to be saved by a Nigerian chef. A fusion of rich, slow-cooked tomato sauce and the smoky, spicy notes of the motherland. Each strand tells a story of survival and delicious discovery, a testament to the unexpected bonds forged over a shared meal.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    salad: {
        name: 'The Real Green House',
        aliases: ['salad', 'garden', 'symphony', 'greens', 'vegetables', 'healthy'],
        image: 'assets/food/salad.png',
        prices: { big: 3000, bigger: 4500, biggest: 6000 },
        toppings: saladToppings,
        category: 'mains',
        order: 5,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">This isn't just a salad, it's a celebration of everything that grows under the Nigerian sun. We source our greens from secret gardens where the soil whispers ancient secrets to the roots. Each leaf is chosen for its character, its crunch, its contribution to the symphony of flavors dancing in your bowl.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    poutine: { 
        name: 'The Montreal Poutine',
        aliases: ['poutine', 'montreal', 'fries', 'gravy', 'cheese', 'canadian'],
        image: 'assets/food/poutine.png',
        prices: { big: 10000, bigger: 16000, biggest: 20000 },
        toppings: snackToppings,
        category: 'mains',
        order: 6,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A message arrived on a cold wind from the North, a recipe scrawled on birch bark. It spoke of fries, curds, and gravy. We honored the tradition, but we could not ignore the call of our own spices. We introduced the warmth of the Sahara to the chill of the Canadian winter. The result is a culinary dialogue between two worlds, a comforting dish that tells a story of unexpected friendship.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    pizza: {
        name: 'The Italian Special',
        aliases: ['pizza', 'italian', 'special', 'pie', 'cheese', 'tomato'],
        image: 'assets/food/pizza.png',
        prices: { big: 7000, bigger: 10000, biggest: 13000 },
        toppings: pizzaToppings,
        category: 'mains',
        order: 7,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">An Italian classic, kidnapped and brought to a bustling Lagos market. We showed it our spices, our smoke, our fire. It resisted at first, but then it understood. On a bed of hand-stretched dough, Italian tradition and Nigerian audacity dance together. Topped with Suya, Yaji, and our secret sauce, it's a pizza that speaks with a bold new accent.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    shawarma: {
        name: 'The Midnight Shawarma',
        aliases: ['shawarma', 'midnight', 'wrap', 'meat', 'arab', 'middle eastern'],
        image: 'assets/food/shawarma.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: meatToppings,
        category: 'mains',
        order: 8,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Learned from a master on a bustling street corner, under a sky of a thousand stars. The secret isn't just the spice, but the patience of the flame. Slow-roasted, hand-carved, and wrapped with reverence. This is the taste of a thousand and one late nights, a story of savory satisfaction told in every single bite.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    sandwich: {
        name: 'The Gentleman\'s Club Sandwich',
        aliases: ['sandwich', 'gentleman', 'club', 'bread', 'layers', 'classic'],
        image: 'assets/food/sandwich.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: sandwichToppings,
        category: 'mains',
        order: 9,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">This sandwich wears a three-piece suit to work. Layer upon layer of carefully selected ingredients, stacked with architectural precision. It's the kind of sandwich that commands respect in any room, whether that's a boardroom or your backyard. Every bite is a statement of sophistication.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    frittata: {
        name: 'The Lagos Morning Frittata',
        aliases: ['frittata', 'lagos', 'morning', 'eggs', 'breakfast', 'omelette'],
        image: 'assets/food/frittata.png',
        prices: { big: 3500, bigger: 5000, biggest: 6500 },
        toppings: meatToppings,
        category: 'mains',
        order: 10,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Born in the bustling morning markets of Lagos, where vendors call out their wares and the air is thick with possibility. This frittata captures the energy of a new day—eggs whisked with the dreams of ambitious souls, folded with ingredients that tell stories of hustle and hope. It's breakfast poetry, written in golden, fluffy verses.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Nigerian Rice Dishes
    jollof: {
        name: "Chim's Smokey Jollof",
        aliases: ['jollof', 'smokey', 'rice', 'nigerian', 'chim', 'party'],
        image: 'assets/food/jollofrice.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: riceToppings,
        category: 'mains',
        order: 11,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">This isn't just rice. It's a statement. It's the heart of the party, the soul of every gathering. My recipe is a closely guarded secret, passed down through generations who understood the sacred geometry of smoke, tomato, and spice. Each grain is infused with history and flavor. To taste it is to understand.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    friedrice: {
        name: 'The Chinese Stir Fry Rice',
        aliases: ['fried rice', 'chinese', 'stir fry', 'rice', 'vegetables', 'asian'],
        image: 'assets/food/friedrice.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: riceToppings,
        category: 'mains',
        order: 12,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">We sought the most vibrant greens, the most crisp vegetables from a hidden market known only to the city's finest chefs. This dish is a celebration of freshness, a festival of color and crunch. Each ingredient is flash-fried in a searing wok to lock in its essence, creating a light yet deeply satisfying experience that dances on the palate.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    coconutrice: {
        name: 'The Island Coconut Rice',
        aliases: ['coconut rice', 'coconut', 'island rice', 'white rice'],
        image: 'assets/food/coconutrice.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: riceToppings,
        category: 'mains',
        order: 13,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the coastal kitchens where palm trees whisper secrets to the sea. Each grain is kissed by coconut milk and seasoned with island dreams. It's a taste of paradise on a plate, where every mouthful carries the essence of tropical breezes and golden shores.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    ofadarice: {
        name: 'The Authentic Ofada Rice',
        aliases: ['ofada rice', 'ofada', 'local rice', 'authentic', 'brown rice'],
        image: 'assets/food/ofadarice.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: riceToppings,
        category: 'mains',
        order: 14,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Unpolished, unrefined, unapologetically authentic. This is rice as nature intended, with all its character intact. Each grain tells a story of local farms and traditional methods, paired with a sauce that's been perfected over generations. Authenticity you can taste.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    burrito: { 
        name: 'The Obese Burrito',
        aliases: ['burrito', 'obese', 'wrap', 'mexican', 'big', 'large'],
        image: 'assets/food/burrito.png',
        prices: { big: 6000, bigger: 9000, biggest: 12000 },
        toppings: meatToppings,
        category: 'mains',
        order: 15,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">We were told it was impossible. "Too much," they said. "It cannot be contained." We saw it as a challenge. This burrito is an architectural marvel, a testament to pure ambition. We layered flavors like a master weaver, ensuring every single bite is a journey through a landscape of taste. It is a feast in your hands, an experience that demands your full attention. I dare you to conquer it.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Nigerian Soups
    
    peppersoup: {
        name: 'The Village Pepper Soup',
        aliases: ['pepper soup', 'pepper', 'spicy soup', 'hot soup', 'village'],
        image: 'assets/food/peppersoup.png',
        prices: { big: 3500, bigger: 5500, biggest: 7500 },
        toppings: soupToppings,
        category: 'mains',
        order: 16,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Fire meets soul in this ancient brew. Each drop awakens the senses with a symphony of spices that dance on your tongue. This is not just soup—it's liquid courage, bottled warmth, medicine for the spirit. One spoonful and you'll understand why it's called the healer's choice.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    okrasoup: {
        name: 'The Silky Okra Soup',
        aliases: ['okra soup', 'okra', 'silky', 'soup', 'vegetable soup'],
        image: 'assets/food/okrasoup.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: soupToppings,
        category: 'mains',
        order: 17,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Green like the first leaves of spring, smooth like morning silk. This soup is nature's embrace in liquid form, where every strand of okra weaves a tale of comfort and nourishment. It's a gentle giant that speaks softly but fills the soul completely.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    ewedu: {
        name: 'The Smooth Ewedu Soup',
        aliases: ['ewedu', 'jute leaves', 'smooth', 'soup', 'yoruba soup'],
        image: 'assets/food/ewedu.png',
        prices: { big: 3500, bigger: 5000, biggest: 6500 },
        toppings: soupToppings,
        category: 'mains',
        order: 18,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Silky as river water, green as forest shadows. This ancient soup carries the whispers of Yoruba kitchens, where generations have perfected the art of turning humble leaves into liquid poetry. Each spoonful is a meditation on simplicity and tradition.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    afangsoup: {
        name: 'The Southern Afang Delicacy',
        aliases: ['afang soup', 'afang', 'southern', 'delicacy', 'vegetable soup'],
        image: 'assets/food/afangsoup.png',
        prices: { big: 5000, bigger: 7000, biggest: 9000 },
        toppings: soupToppings,
        category: 'mains',
        order: 19,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the mangrove forests of the South, where ancient recipes flow like tidal waters. This soup is a symphony of leaves and seafood, each ingredient carefully chosen to create harmony in your bowl. It's the taste of coastal abundance, captured and concentrated.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Nigerian Swallows
    amala: {
        name: 'The Yoruba Heritage Amala',
        aliases: ['amala', 'yam flour', 'yoruba', 'heritage', 'swallow'],
        image: 'assets/food/amala.png',
        prices: { big: 2500, bigger: 3500, biggest: 4500 },
        toppings: swallowToppings,
        category: 'mains',
        order: 20,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The foundation of countless meals, the canvas for countless soups. Made from yam flour that carries the essence of earth and tradition. This is more than sustenance—it's culture on a plate, connecting us to ancestors who understood that the simplest foods often carry the deepest meaning.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    eba: {
        name: 'The Classic Golden Eba',
        aliases: ['eba', 'garri', 'cassava', 'golden', 'swallow'],
        image: 'assets/food/eba.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: swallowToppings,
        category: 'mains',
        order: 21,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Golden like the African sun, smooth like river stones. Made from cassava that has been transformed through ancient wisdom into something pure and nourishing. Each morsel carries the strength of the continent, the resilience of our people, the promise of satisfaction.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    fufu: {
        name: 'The Continental Fufu',
        aliases: ['fufu', 'cassava fufu', 'plantain fufu', 'continental', 'swallow'],
        image: 'assets/food/fufu.png',
        prices: { big: 2500, bigger: 3500, biggest: 4500 },
        toppings: swallowToppings,
        category: 'mains',
        order: 22,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Pounded with rhythm, shaped with care, served with love. This is the heartbeat of African cuisine, the companion to countless soups and stews. Each portion is a testament to the art of transformation, turning simple ingredients into something that feeds both body and soul.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    poundedyam: {
        name: 'The Royal Pounded Yam',
        aliases: ['pounded yam', 'yam', 'royal', 'traditional', 'swallow'],
        image: 'assets/food/poundedyam.png',
        prices: { big: 3000, bigger: 4000, biggest: 5000 },
        toppings: swallowToppings,
        category: 'mains',
        order: 23,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The king of all swallows, pounded to perfection with rhythmic precision. Each morsel is cloud-like yet substantial, a testament to the ancient art of the mortar and pestle. This is not just food—it's a royal experience, fit for the table of chiefs and everyday heroes alike.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Nigerian Proteins
    asun: {
        name: 'The Lagos Street Asun',
        aliases: ['asun', 'goat meat', 'spicy goat', 'lagos street', 'pepper'],
        image: 'assets/food/asun.png',
        prices: { big: 5000, bigger: 7500, biggest: 10000 },
        toppings: meatToppings,
        category: 'mains',
        order: 24,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Born in the smoky corners of Lagos streets, where fire meets flesh in perfect harmony. This is not just grilled goat meat—it's a celebration of bold flavors and fearless cooking. Each piece is seasoned with rebellion and grilled with passion. Street food royalty, elevated to palace standards.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    nkwobi: {
        name: 'The Eastern Delicacy Nkwobi',
        aliases: ['nkwobi', 'cow foot', 'eastern delicacy', 'spicy', 'igbo'],
        image: 'assets/food/nkwobi.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: meatToppings,
        category: 'mains',
        order: 25,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the ancient kitchens of the East, where patience is the primary ingredient. Slow-cooked to tender perfection, then dressed in a symphony of spices that tell stories of celebration and community. This is food that brings people together, one shared plate at a time.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    grilledfish: {
        name: 'The Coastal Grilled Fish',
        aliases: ['grilled fish', 'fish', 'coastal', 'barbecue', 'pepper fish'],
        image: 'assets/food/grilledfish.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: meatToppings,
        category: 'mains',
        order: 26,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Fresh from the Atlantic waters, kissed by flames and blessed with spices. Each fish is chosen at dawn from the fisherman's nets, then grilled to smoky perfection. This is the taste of the coast—salt air, open fires, and the bounty of the sea all captured in one perfect bite.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
// Additional Nigerian Soups
    ogbonosoup: {
        name: 'The Ancient Ogbono Soup',
        aliases: ['ogbono soup', 'ogbono', 'draw soup', 'ancient', 'wild mango'],
        image: 'assets/food/ogbonosoup.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: soupToppings,
        category: 'mains',
        order: 49,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the wild mango trees of ancient forests comes this mystical soup. The seeds hold secrets of thickening that our ancestors discovered centuries ago. When stirred, it becomes a silky web that captures flavors and memories alike. This is soup that connects us to the wisdom of the wild.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    bitterleafsoup: {
        name: 'The Healing Bitter Leaf Soup',
        aliases: ['bitter leaf soup', 'ofe onugbu', 'bitter leaf', 'healing', 'medicine soup'],
        image: 'assets/food/bitterleafsoup.png',
        prices: { big: 5000, bigger: 7000, biggest: 9000 },
        toppings: soupToppings,
        category: 'mains',
        order: 50,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Medicine disguised as a meal. Each bitter leaf carries healing properties that our grandmothers knew by heart. The bitterness cleanses, the richness nourishes, and together they create a soup that heals both body and spirit. This is food as pharmacy, taste as therapy.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    ohasoup: {
        name: 'The Sacred Oha Soup',
        aliases: ['oha soup', 'ofe oha', 'sacred', 'rare leaves', 'eastern delicacy'],
        image: 'assets/food/ohasoup.png',
        prices: { big: 5500, bigger: 7500, biggest: 9500 },
        toppings: soupToppings,
        category: 'mains',
        order: 51,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The sacred leaves that grow only in blessed soil. Oha is not just an ingredient—it's a gift from the earth that must be harvested with reverence. This soup carries the essence of eastern traditions, where every leaf tells a story of heritage and honor.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    whitesoup: {
        name: 'The Pristine White Soup',
        aliases: ['white soup', 'ofe nsala', 'nsala', 'pristine', 'catfish soup'],
        image: 'assets/food/whitesoup.png',
        prices: { big: 6000, bigger: 8000, biggest: 10000 },
        toppings: soupToppings,
        category: 'mains',
        order: 52,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Pure as morning mist, rich as tradition itself. This soup requires no palm oil—its beauty lies in its simplicity and the quality of its ingredients. Fresh catfish swimming in a broth that's been perfected over generations. Purity has never tasted so profound.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    bangasoup: {
        name: 'The Delta Banga Soup',
        aliases: ['banga soup', 'palm nut soup', 'delta', 'ofe akwu', 'palm fruit'],
        image: 'assets/food/bangasoup.png',
        prices: { big: 5000, bigger: 7000, biggest: 9000 },
        toppings: soupToppings,
        category: 'mains',
        order: 53,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the heart of the Niger Delta, where palm trees touch the sky and their fruits hold liquid gold. This soup carries the essence of the creeks—rich, complex, and deeply satisfying. Each spoonful is a journey through mangrove forests and ancient waterways.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    atamasoup: {
        name: 'The Coastal Atama Soup',
        aliases: ['atama soup', 'coastal', 'atama leaves', 'periwinkle soup'],
        image: 'assets/food/atamasoup.png',
        prices: { big: 5500, bigger: 7500, biggest: 9500 },
        toppings: soupToppings,
        category: 'mains',
        order: 54,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From coastal communities where the sea meets the forest. Atama leaves bring a unique flavor that speaks of salt air and sandy shores. Combined with fresh seafood, this soup is a celebration of maritime abundance and coastal wisdom.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    gbegiri: {
        name: 'The Smooth Gbegiri Soup',
        aliases: ['gbegiri', 'bean soup', 'smooth', 'yoruba bean soup'],
        image: 'assets/food/gbegiri.png',
        prices: { big: 3500, bigger: 5000, biggest: 6500 },
        toppings: soupToppings,
        category: 'mains',
        order: 55,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Silky smooth like morning clouds, rich like the earth after rain. Made from beans that have been transformed into liquid velvet. This soup is the perfect companion to amala, a partnership that has lasted generations and will last many more.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    eforiro: {
        name: 'The Garden Efo Riro',
        aliases: ['efo riro', 'spinach stew', 'garden', 'vegetable stew'],
        image: 'assets/food/eforiro.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: soupToppings,
        category: 'mains',
        order: 56,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A garden party in a pot, where leafy greens dance with aromatic spices. This is not just vegetable stew—it's a celebration of everything that grows under the Nigerian sun. Each leaf adds its voice to the chorus of flavors.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    edikangikong: {
        name: 'The Royal Edikang Ikong',
        aliases: ['edikang ikong', 'vegetable soup', 'royal', 'fluted pumpkin', 'waterleaf soup'],
        image: 'assets/food/edikangikong.png',
        prices: { big: 5500, bigger: 7500, biggest: 9500 },
        toppings: soupToppings,
        category: 'mains',
        order: 57,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The king of vegetable soups, where fluted pumpkin leaves meet waterleaf in royal harmony. This soup is abundance in a bowl—rich with seafood, tender with meat, green with life. It's a feast fit for kingdoms.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    fishermansoup: {
        name: 'The Fisherman\'s Bounty Soup',
        aliases: ['fisherman soup', 'fishermans soup', 'bounty', 'seafood soup', 'native soup'],
        image: 'assets/food/fishermansoup.png',
        prices: { big: 6000, bigger: 8000, biggest: 10000 },
        toppings: soupToppings,
        category: 'mains',
        order: 58,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Born by the riverside where fishermen cast their nets at dawn. This soup is the ocean's gift to the pot—fresh fish, prawns, and crab swimming in a broth that tastes like morning tides. It's the sea's love letter to the land.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    miyankuka: {
        name: 'The Northern Miyan Kuka',
        aliases: ['miyan kuka', 'baobab soup', 'northern', 'kuka soup', 'hausa soup'],
        image: 'assets/food/miyankuka.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: soupToppings,
        category: 'mains',
        order: 59,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the ancient baobab trees that have watched over the Sahel for millennia. The leaves hold power—nutrition that sustains nomads and flavor that speaks of desert winds and starlit nights. This is soup that connects us to the vastness of the North.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    miyantaushe: {
        name: 'The Golden Miyan Taushe',
        aliases: ['miyan taushe', 'pumpkin soup', 'golden', 'northern pumpkin', 'calabash soup'],
        image: 'assets/food/miyantaushe.png',
        prices: { big: 4000, bigger: 6000, biggest: 8000 },
        toppings: soupToppings,
        category: 'mains',
        order: 60,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Golden like desert sunrise, sweet like the promise of harvest. Made from pumpkins that grow fat under the northern sun. This soup carries the warmth of Sahel hospitality and the sweetness of seasonal abundance.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
// More Nigerian Soups
    ofeowerri: {
        name: 'The Eastern Ofe Owerri',
        aliases: ['ofe owerri', 'owerri soup', 'eastern soup', 'igbo soup'],
        image: 'assets/food/ofeowerri.png',
        prices: { big: 5000, bigger: 7000, biggest: 9000 },
        toppings: soupToppings,
        category: 'mains',
        order: 61,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the heartland of Igbo culture, where ancient recipes are guarded like family treasures. This soup carries the pride of Owerri kitchens, rich with tradition and abundant with the finest ingredients the East has to offer.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    ofeutazi: {
        name: 'The Spicy Ofe Utazi',
        aliases: ['ofe utazi', 'utazi soup', 'spicy soup', 'utazi leaves'],
        image: 'assets/food/ofeutazi.png',
        prices: { big: 5500, bigger: 7500, biggest: 9500 },
        toppings: soupToppings,
        category: 'mains',
        order: 62,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The leaves that bite back with healing fire. Utazi brings both heat and medicine to the pot, creating a soup that awakens the senses and cleanses the spirit. This is food as both pleasure and pharmacy.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    ukazi: {
        name: 'The Wild Ukazi Soup',
        aliases: ['ukazi soup', 'wild ukazi', 'afang ukazi', 'ukazi leaves'],
        image: 'assets/food/ukazi.png',
        prices: { big: 6000, bigger: 8000, biggest: 10000 },
        toppings: soupToppings,
        category: 'mains',
        order: 63,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the wild forests where ukazi grows free and untamed. These leaves must be shredded with reverence, their tough fibers hiding delicate flavors that emerge only through patient preparation. Wild food for cultured palates.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    achisoup: {
        name: 'The Thickened Achi Soup',
        aliases: ['achi soup', 'thickened soup', 'achi seeds', 'cocoyam soup'],
        image: 'assets/food/achisoup.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: soupToppings,
        category: 'mains',
        order: 64,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Ancient thickening wisdom in seed form. Achi creates textures that modern science still struggles to replicate. This soup connects us to agricultural ancestors who understood that the simplest seeds hold the most powerful secrets.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    groundnutsoup: {
        name: 'The Rich Groundnut Soup',
        aliases: ['groundnut soup', 'peanut soup', 'rich soup', 'northern groundnut'],
        image: 'assets/food/groundnutsoup.png',
        prices: { big: 4500, bigger: 6500, biggest: 8500 },
        toppings: soupToppings,
        category: 'mains',
        order: 65,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From northern fields where groundnuts grow plump under the Sahel sun. Ground to creamy perfection, they create a soup that's both comfort and luxury. Each spoonful carries the richness of good soil and patient harvests.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    orasoup: {
        name: 'The Sacred Ora Soup',
        aliases: ['ora soup', 'sacred ora', 'ora leaves', 'traditional soup'],
        image: 'assets/food/orasoup.png',
        prices: { big: 5500, bigger: 7500, biggest: 9500 },
        toppings: soupToppings,
        category: 'mains',
        order: 66,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The leaves that grow only in blessed places, gathered by those who know their secrets. Ora soup is not just a meal—it's a ritual, a connection to the spiritual side of cooking where ingredients are chosen by the ancestors themselves.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    uzizasoup: {
        name: 'The Aromatic Uziza Soup',
        aliases: ['uziza soup', 'aromatic soup', 'uziza leaves', 'pepper soup'],
        image: 'assets/food/uzizasoup.png',
        prices: { big: 5000, bigger: 7000, biggest: 9000 },
        toppings: soupToppings,
        category: 'mains',
        order: 67,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The leaves that perfume the air before they even touch the pot. Uziza brings an aromatic complexity that transforms simple broth into liquid poetry. This soup speaks in whispers of fragrance and shouts of flavor.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Snacks
    scotchegg: {
        name: 'The London-Lagos Scotch Egg',
        aliases: ['scotch egg', 'london', 'lagos', 'egg', 'sausage', 'british'],
        image: 'assets/food/scotchegg.png',
        prices: { big: 3000, bigger: 4500, biggest: 6000 },
        toppings: snackToppings,
        category: 'snacks',
        order: 27,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A tale of two cities—the foggy streets of London and the vibrant energy of Lagos. We took the British classic and gave it a Nigerian soul, wrapping it in our spiced meat blend and frying it to golden perfection. It's a bridge between worlds, a handshake between cultures, served warm with respect for both traditions.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    springroll: {
        name: 'The Crispy Spring Chronicle',
        aliases: ['spring roll', 'crispy', 'chronicle', 'fried', 'asian', 'vegetables'],
        image: 'assets/food/springroll.png',
        prices: { big: 2500, bigger: 3500, biggest: 4500 },
        toppings: snackToppings,
        category: 'snacks',
        order: 28,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Each roll holds secrets—vegetables that crunch with the memory of morning dew, spices that whisper tales of ancient trade routes. Wrapped tight in gossamer thin pastry and fried until they sing. These aren't just spring rolls; they're tiny capsules of joy, delivering bursts of flavor that transport you to bustling Asian markets filtered through a Nigerian lens.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    samosa: {
        name: 'The Triangular Treasures',
        aliases: ['samosa', 'triangular', 'treasures', 'fried', 'indian', 'pastry'],
        image: 'assets/food/samosa.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: snackToppings,
        category: 'snacks',
        order: 29,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Geometry has never tasted so good. These golden triangles arrived on the spice route centuries ago and made themselves at home in our hearts. We fill them with stories—spiced potatoes that remember their journey from distant fields, peas that pop with sweetness, all wrapped in pastry that shatters beautifully at first bite. Small packages, infinite possibilities.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    akara: {
        name: 'The Golden Morning Akara',
        aliases: ['akara', 'bean cakes', 'golden', 'morning', 'fried beans'],
        image: 'assets/food/akara.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: snackToppings,
        category: 'snacks',
        order: 30,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Golden orbs of morning joy, crispy outside and fluffy within. Made from beans that have been transformed through skill and tradition into something magical. These are the taste of childhood mornings, of busy markets, of home.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    chinchin: {
        name: "The Ancestor's Chin Chin",
        aliases: ['chin chin', 'ancestor', 'fried', 'crunchy', 'nigerian', 'snack'],
        image: 'assets/food/chinchin.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: pastrySweetToppings,
        category: 'snacks',
        order: 31,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A recipe whispered by the harmattan wind, a thousand tiny, crunchy pieces of joy. Each one is a memory of celebration, fried to a perfect golden crisp. It's the sound of happiness in a bowl, a taste of pure nostalgia.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Sides
    moimoi: {
        name: 'The Velvet Moi Moi',
        aliases: ['moi moi', 'velvet', 'beans', 'steamed', 'nigerian', 'pudding'],
        image: 'assets/food/moimoi.png',
        prices: { big: 2500, bigger: 4000, biggest: 5500 },
        toppings: moiMoiToppings,
        category: 'sides',
        order: 32,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The art of Moi Moi is the art of transformation. Taking the humble bean and turning it into something ethereal and smooth. Ours is steamed slowly, patiently, in seasoned leaves that impart a subtle, earthy aroma. It is a delicate process that results in a savory pudding of unparalleled texture. A true taste of Nigerian culinary grace.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    fries: {
        name: 'The Perfectly frenched Potatoes',
        aliases: ['fries', 'perfectly', 'frenched', 'potatoes', 'crispy', 'golden'],
        image: 'assets/food/fries.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: friesToppings,
        category: 'sides',
        order: 33,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The quest for the perfect fry is a noble one. It led us to fields where the soil is rich and the potatoes are proud. We cut them by hand, blanch them twice for that fluffy interior and shatteringly crisp exterior. A sprinkle of sea salt is all they need to sing. Simple perfection is the ultimate luxury.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    macaronisalad: {
        name: 'The Picnic Macaroni Salad',
        aliases: ['macaroni salad', 'picnic', 'pasta salad', 'cold', 'creamy', 'summer'],
        image: 'assets/food/macsalad.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: [],
        category: 'sides',
        order: 34,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">This is the taste of laughter and shared blankets under a shady tree. A simple pleasure, elevated to an art form. Tender pasta, crisp vegetables, and a dressing that sings with a sweet, tangy harmony. It's comfort food that reminds you of the best of days.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    coleslaw: {
        name: 'The Classic Creamy Slaw',
        aliases: ['coleslaw', 'classic', 'creamy', 'slaw', 'cabbage', 'fresh'],
        image: 'assets/food/coleslaw.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: [],
        category: 'sides',
        order: 35,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A cherished family recipe for sunny days and big gatherings. The secret isn't in what you add, but what you don't. Crisp, fresh vegetables, a dressing that's both creamy and light, with just a hint of tang. It's the perfect, cooling counterpoint to a feast of spice. A moment of pure, crunchy refreshment.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Desserts
    waffles: {
        name: 'The Golden Grid Delights',
        aliases: ['waffles', 'golden', 'grid', 'breakfast', 'syrup', 'belgian'],
        image: 'assets/food/wafles.png',
        prices: { big: 3000, bigger: 4500, biggest: 6000 },
        toppings: [...pancakeToppings, ...sweetToppings],
        category: 'desserts',
        order: 36,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Perfection lives in the details—each square pocket designed to hold syrup, each ridge crafted to deliver the perfect ratio of crisp to fluffy. These waffles are architectural marvels, golden grids that transform simple batter into breakfast art. Whether crowned with fruit or drizzled with honey, they're a canvas for your morning dreams.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    pancakes: {
        name: 'The Sunrise Pancake Stack',
        aliases: ['pancakes', 'sunrise', 'stack', 'breakfast', 'fluffy', 'syrup'],
        image: 'assets/food/pancake.png',
        prices: { big: 3000, bigger: 4500, biggest: 6000 },
        toppings: pancakeToppings,
        category: 'desserts',
        order: 37,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Found in a grandmother's faded notebook, the recipe simply said: "Patience, good butter, and a happy heart." We follow it to the letter. These aren't just mixed, they're coaxed. Rested, then griddled until they are impossibly fluffy and golden. They are comfort, pure and simple, a warm hug on a plate.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    icecream: {
        name: "Sweet Northern Glacier",
        aliases: ['ice cream', 'sweet', 'northern', 'glacier', 'cold', 'dessert'],
        image: 'assets/food/icecream.png',
        prices: { big: 2500, bigger: 4000, biggest: 5500 },
        toppings: sweetToppings,
        category: 'desserts',
        order: 38,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Our ice cream is not made, it is composed. We churn it slowly, in frozen marble bowls, allowing the cream to develop a dense, luxurious texture that machines can only dream of. Each scoop is a testament to the beauty of simple, perfect ingredients, a cool whisper on a hot day.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    parfait: {
        name: 'The Layered Dreams Parfait',
        aliases: ['parfait', 'layered', 'dreams', 'yogurt', 'granola', 'fruit'],
        image: 'assets/food/parfait.png',
        prices: { big: 2500, bigger: 3500, biggest: 4500 },
        toppings: sweetToppings,
        category: 'desserts',
        order: 39,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Like life itself, this parfait is built in layers—each one telling its own story, yet contributing to a greater narrative. Creamy yogurt meets crunchy granola, sweet fruit dances with subtle spice. It's a meditation in a glass, a reminder that the most beautiful things are often the simplest, assembled with intention and love.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    cupcake: {
        name: 'The Cloud-Kissed Cupcake',
        aliases: ['cupcake', 'cloud', 'kissed', 'cake', 'frosting', 'sweet'],
        image: 'assets/food/cupcake.png',
        prices: { big: 2000, bigger: 3500, biggest: 5000 },
        toppings: pastrySweetToppings,
        category: 'desserts',
        order: 40,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">An architect and a baker fell in love. This was their creation. A foundation of impossibly light cake and a spire of ethereal frosting. It is a tiny tower of sweetness, a testament to the fact that the best things are built with passion and a touch of whimsy.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    puffpuff: {
        name: 'The Cloud Spheres of Joy',
        aliases: ['puff puff', 'cloud', 'spheres', 'joy', 'fried', 'nigerian'],
        image: 'assets/food/puffpuff.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: pastrySweetToppings,
        category: 'desserts',
        order: 41,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">These are more than just fried dough—they're edible clouds, little spheres of happiness that float on your tongue before dissolving into pure bliss. Made from a recipe that's been passed down through generations of street vendors and loving grandmothers. Each bite is a memory, each sphere a moment of pure, unadulterated joy. Simple magic, profound pleasure.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    cookie: {
        name: "Cookie Monster's Stash",
        aliases: ['cookie', 'monster', 'stash', 'chocolate', 'baked', 'sweet'],
        image: 'assets/food/cookie.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: pastrySweetToppings,
        category: 'desserts',
        order: 42,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">We embarked on a quest for the perfect cookie. It required melting Belgian chocolate under a full moon and using butter churned only to the sound of Afrobeats. The result is a cookie with crisp edges, a gooey center, and a story in every chunk. It's a secret worth keeping.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },

    // Drinks
    boba: { 
        name: 'The Taiwanese Original Boba',
        aliases: ['boba', 'taiwanese', 'tea', 'bubble tea', 'pearls', 'milk tea'],
        image: 'assets/food/boba.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: sweetToppings,
        category: 'drinks',
        order: 43,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From a bustling night market in Taipei, a recipe was carried across oceans. It wasn't written down, but remembered—a precise balance of tea, milk, and the perfect 'Q' of the pearl. We brew our tea in small, dedicated batches, ensuring every cup carries the authentic, fragrant soul of its origin. The pearls are prepared hourly, their texture a testament to our dedication.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    milkshake: { 
        name: 'The Perfectly Creamed Milkshake',
        aliases: ['milkshake', 'perfectly', 'creamed', 'shake', 'milk', 'thick'],
        image: 'assets/food/milkshake.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: sweetToppings,
        category: 'drinks',
        order: 44,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">The secret is in the churn. Not too fast, not too slow. A rhythm passed down from a forgotten artisan who believed that texture was a form of magic. We use only the purest cream and the most decadent inclusions, blending them until they reach a state of liquid silk. It is more than a drink; it is a moment of pure, unadulterated bliss.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    lassi: { 
        name: 'The Famous Indian Yoghurt',
        aliases: ['lassi', 'famous', 'indian', 'yogurt', 'drink', 'smooth'],
        image: 'assets/food/lassi.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: sweetToppings,
        category: 'drinks',
        order: 45,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">A gift from the kitchens of Rajasthan, where this drink is more than refreshment—it's a remedy for the desert heat, a balm for the soul. We use a special culture of yoghurt, churned by hand until it reaches a state of impossible smoothness. It is then kissed with fruit and spice, a perfect harmony of tart and sweet.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    coffee: {
        name: 'The Jos Plateau Coffee',
        aliases: ['coffee', 'jos', 'plateau', 'beans', 'brew', 'hot'],
        image: 'assets/food/coffee.png',
        prices: { big: 2000, bigger: 3000, biggest: 4000 },
        toppings: sweetToppings,
        category: 'drinks',
        order: 46,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Sourced from the misty highlands where the air is cool and the soil is rich. These beans are hand-picked at dawn, roasted slowly to unlock notes of earth and chocolate. This is not just a drink to wake you up; it's a drink that awakens your soul to the beauty of the morning.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    zobo: {
        name: 'The Refreshing Zobo Blend',
        aliases: ['zobo', 'hibiscus', 'refreshing', 'drink', 'nigerian drink'],
        image: 'assets/food/zobo.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: drinkToppings,
        category: 'drinks',
        order: 47,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">Ruby red like the sunset over Lagos, refreshing like the morning breeze. Made from hibiscus leaves and a secret blend of fruits and spices that dance on your palate. This is not just a drink—it's a celebration in a glass, wellness wrapped in flavor.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    },
    kunu: {
        name: 'The Northern Tiger Nuts Kunu',
        aliases: ['kunu', 'tiger nuts', 'northern', 'drink', 'traditional'],
        image: 'assets/food/kunu.png',
        prices: { big: 1500, bigger: 2500, biggest: 3500 },
        toppings: drinkToppings,
        category: 'drinks',
        order: 48,
        letter: `<p class="mb-4">To my trusted reader,</p><p class="mb-4">From the northern kingdoms where tiger nuts grow wild and free. Blended with ancient wisdom and modern technique into a drink that's both nostalgic and refreshing. Each sip carries the essence of desert winds and savanna dreams.</p><p class="text-right mt-6">Chim</p>{{SIGNATURE}}`
    }
};

            
            
            const exoticsData = {
                peppersoup: {
                    name: 'The Swampy Bite',
                    description: 'Featuring rare ingredients like Snake, Crocodile, and Snail. Price upon request.',
                    image: 'assets/food/peppersoup.png',
                    alt: 'Exotic Pepper Soup Selection',
                    letter: `
                        <p class="mb-4">To Chim,</p>
                        <p class="mb-4">The river hunt was a success. The ancient specimen we sought, the one they call the "River Guardian," put up a legendary fight, but our efforts paid off. Its primal heat will make for a pepper soup of unparalleled potency.</p>
                        <p class="mb-4">We're moving under the cover of night, the cargo is secure. The whispers of the mangrove are behind us. Expect our arrival soon, but you know how this goes... only when the stars align.</p>
                        <p>Prepare the sacred spices. This feast will be one for the ages.</p>
                        <p class="text-right mt-6">- The Huntsman</p>`
                },
                unseeneggs: {
        name: 'Unseen Eggs',
        description: 'Rare delicacies from creatures that exist beyond ordinary sight. Price upon request.',
        image: 'assets/food/exoticegg.png',
        alt: 'Unseen Eggs Collection',
        letter: `
            <p class="mb-4">To Chim,</p>
            <p class="mb-4">The expedition to the hidden valleys was treacherous, but we have returned with specimens that most believe to be mere legend. These eggs come from creatures that dwell in the spaces between what is seen and unseen.</p>
            <p class="mb-4">Each one pulses with an energy that our instruments cannot measure, yet our taste buds recognize as divine. The locals speak of them only in whispers, calling them "gifts from the shadow realm."</p>
            <p>Handle with reverence. Cook with respect. These are not mere ingredients—they are mysteries made edible.</p>
            <p class="text-right mt-6">- The Seeker</p>`
    },
                sushi: {
                    name: 'The Laky Bite',
                    description: 'A unique blend of Japanese technique and Nigerian flavors. Price upon request.',
                    image: 'assets/food/sushi.png',
                    alt: 'Fusion Sushi',
                    letter: `
                        <p class="mb-4">To Chim,</p>
                        <p class="mb-4">The old master in Kyoto finally relented. He has shared the secret techniques, the precise art of the blade and rice. I have paired his ancient wisdom with the fiery spirit of our local spice routes.</p>
                        <p class="mb-4">The result is... something new. A pact between two worlds on a single plate. I am bringing back a very limited quantity of the key ingredients. This cannot be replicated easily.</p>
                        <p>Tell our patrons to prepare their palates for a journey they have never experienced. The consignment is small and will not last.</p>
                        <p class="text-right mt-6">- The Voyager</p>`
                }
                
            };

            const locationsData = {
                lagos: {
                    name: 'Lagos',
                    image: 'assets/places/lagos.png',
                    letter: `
                        <p class="mb-4">My journey began in the concrete jungle, a city that never sleeps. I wandered amongst the lands to sneak in the best from the four corners of the earth. The city is vast, a sprawling map of taste, and I continue mapping it to bring this magic to more people.</p>
                        <p class="text-right mt-6">- The Cartographer</p>`
                },
                portharcourt: {
                    name: 'Port Harcourt',
                    image: 'assets/places/portharcourt.png',
                    letter: `
                        <p class="mb-4">The Garden City called. I followed the rivers inland, carrying my secrets. I wandered amongst the lands to sneak in the best from the four corners of the earth. This city's appetite is strong, and my work here is only just beginning. I continue mapping this vibrant place to bring the magic to more people.</p>
                        <p class="text-right mt-6">- The Cartographer</p>`
                },
                abuja: {
                    name: 'Abuja',
                    image: 'assets/places/abuja.png',
                    letter: `
                        <p class="mb-4">I arrived in the nation's capital, a city of wide roads and grand ambitions. I wandered amongst the lands to sneak in the best from the four corners of the earth. This city is a center of influence, and its influence will soon carry the taste of our craft far and wide. I continue mapping its boulevards to bring the magic to more people.</p>
                        <p class="text-right mt-6">- The Cartographer</p>`
                }
                
            };
            
            const toppingPrice = 1000;
            let cart = [];
            let isSiteDarkMode = localStorage.getItem('siteDarkMode') !== 'false';
            let currentGiftInfo = null;
            let giftLinks = JSON.parse(localStorage.getItem('pautacos-gift-links') || '[]');