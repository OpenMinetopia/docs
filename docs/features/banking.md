# Rekeningen

## Hoe maak je een rekening aan?
Als je het commando `/rekening create <Company/Goverment/Savings> <naam>` uitvoert word er een rekening aangemaakt. Je kan ook makkelijk een speler toevoegen aan je rekening met `/rekening adduser <Speler> <RekeningNaam> <Admin/Deposit/Withdraw>`

**Alle commands kan je ook met /account gebruiken.

## Commands
|Command|Omschrijving  |Permissie | 
|--|--|--|
| /rekening create <Company/Goverment/Savings> \<naam> |Maak een rekening aan|openminetopia.banking.create  |
| /rekening delete \<naam> | Verwijder een rekening | openminetopia.banking.delete |
| /rekening adduser \<speler> \<RekeningNaam> \<Admin/Deposit/Withdraw>| Voeg iemand toe aan de rekening | openminetopia.banking.adduser |
| /rekening removeuser \<speler> \<RekeningNaam> | Verwijder iemand van de rekening | openminetopia.banking.removeuser |
| /rekening freeze \<RekeningNaam> | Bevries een rekening | openminetopia.banking.freeze |
| /rekening setbalance \<RekeningNaam> \<bedrag> | Zet een bepaald bedrag op de rekening | openminetopia.banking.setbalance |
| /rekening info \<RekeningNaam> | Laat informatie van de rekening zien | openminetopia.banking.info |
| /rekening open | Open de pinautomaat | openminetopia.banking.open |

## Config
Alle functies zijn aanpasbaar in de banking.yml file.

    banking:
      economy-format: '#,##0.00'
      atm-material: RED_SANDSTONE_STAIRS
      inventories:
        select-type-title: '<gray>Select het rekeningtype:'
        select-account-title: <type_color><type_name>
        account-contents-title: <type_color><account_name> <reset>| <gold><account_balance>
