# Color
Met het `/color` commando kan je alle kleuren aanpassen van de speler.

### Commands
| Commando | Omschrijving | Permissie | 
|--|--|--| 
| /color add \<speler> \<Chat/Level/Name/Prefix> \<kleur> | Voeg de kleur toe aan een speler | openminetopia.color.add |
| /color create \<identifier> \<display_name> \<prefix_color> | Maak een kleur aan | openminetopia.color.create |
| /color remove \<speler> \<Chat/Level/Name/Prefix> \<kleur> | Verwijder een kleur | openminetopia.color.remove |
| /color chatcolor | Open het chatcolor menu | -
| /color levelcolor | Open het levelcolor menu | -
| /color namecolor | Open het namecolor menu | -
| /color prefixcolor | Open het prefixcolor menu | -

### Config
Je kan eenvoudig kleuren toevoegen aan via de config.
Of via `/color create`

    colors:
      red:
        display_name: <red>Rood
        color_prefix: <red>
      red_bold:
        display_name: <bold><red>Rood (Bold)
        color_prefix: <bold><red>
      blue:
        display_name: <blue>Blauw
        color_prefix: <blue>
      blue_bold:
        display_name: <bold><blue>Blauw (Bold)
        color_prefix: <bold><blue>
      green:
        display_name: <green>Groen
        color_prefix: <green>
      green_bold:
        display_name: <bold><green>Groen (Bold)
        color_prefix: <bold><green>
      yellow:
        display_name: <yellow>Geel
        color_prefix: <yellow>
      yellow_bold:
        display_name: <bold><yellow>Geel (Bold)
        color_prefix: <bold><yellow>

