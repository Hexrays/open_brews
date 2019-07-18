# Brewery Search App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It is using the [Open Brewery DB](https://www.openbrewerydb.org/) to search for breweries.

## There are 3 main components

1. A search bar, which uses the api to search by name
2. Results
3. Brewery Details

## Endpoints

### List of breweries:

```
https://api.openbrewerydb.org/breweries
```

### List of breweries by name:

```
https://api.openbrewerydb.org/breweries?by_name=cooper
```

### Get a brewery:

```
https://api.openbrewerydb.org/breweries/5494
```

### Autocomplete:

```
https://api.openbrewerydb.org/breweries/autocomplete?query=omm
```
