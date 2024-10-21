# DetectiePoortjes

Je kan eenvoudig een detectiepoortje maken om een iron block te plaatsen en daarboven op een golden pressure plate. Als je dan een van de blokken hier onder gebruikt werkt je detectie poortje. De poortjes hebben een standaard radius van 5 blokken.
![Voorbeeld DetectiePoortje](https://media.nijhuissven.nl/saZa6/zadiwiPU39.png/raw)

Als jij zonder illegale items over de pressure plate loopt worden de blokken groen.
![Goedgekeurde poortjes](https://media.nijhuissven.nl/saZa6/gIFateye93.png/raw)

Als je met illegale items over de pressure plate loopt worden de blokken rood.
![Gefaalde Poortjes](https://media.nijhuissven.nl/saZa6/SAnayebe24.png/raw)

## Config

    detection-gate:
      enabled: true
      blocks:
        replacement-range: 5
        pressure-plate-type: LIGHT_WEIGHTED_PRESSURE_PLATE
        activation-block: IRON_BLOCK
      cooldown: 3
      flagged-materials:
      - SUGAR
      - IRON_HOE
      - STICK
      - WOODEN_SWORD
      - SPIDER_EYE
      - FERMENTED_SPIDER_EYE
      - SNOWBALL
      - ARROW
      - BOW
      - ROTTEN_FLESH
      - STONE_HOE
      - POISONOUS_POTATO
      flag-blocks:
        safe:
          BLACK_STAINED_GLASS: LIME_STAINED_GLASS
          BLACK_WOOL: LIME_WOOL
          BLACK_CONCRETE: LIME_CONCRETE
          BLACK_TERRACOTTA: LIME_TERRACOTTA
        flagged:
          BLACK_STAINED_GLASS: RED_STAINED_GLASS
          BLACK_WOOL: RED_WOOL
          BLACK_CONCRETE: RED_CONCRETE
          BLACK_TERRACOTTA: RED_TERRACOTTA
