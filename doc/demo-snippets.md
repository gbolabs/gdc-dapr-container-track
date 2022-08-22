# Add two-days forecast to WebApi

In `Program.cs`
```csharp
app.MapGet("/weatherforecast/tomorrow", (IWeatherForecastService weatherForecastService) =>
{
    return weatherForecastService.Generate().First();
}).RequireCors(MyAllowSpecificOrigins);
```

# Build and run container

from the `/src` directory
```bash
docker build -f webapi/Dockerfile webapi/ -t gcamp2022-is-blueprntcodspc
docker run -i -p 35001:80 gcamp2022-is-blueprntcodspc
```

# Test APIs with curl
_Using PowerShell_

```ps
wget http://127.0.0.1:35001/weatherforecast/today | select -ExpandProperty content | ConvertFrom-Json


wget http://127.0.0.1:35001/weatherforecast/tomorrow | select -ExpandProperty content | ConvertFrom-Json
```

# Add the second record the Angular Application

- Within the `src/angularapp/src/app/wheater/wheaterforecast.service.ts` service
  ```typescript
  getTomorrow(): Observable<Weatherforecast> {

    // return of<Weatherforecast>(CurrentWeatherforecast);

    return this.http.get<Weatherforecast>("http://127.0.0.1:35001/weatherforecast/tomorrow");
  }
  ```
- Within the `src/angularapp/src/app/app.component.html`
  ```html
  <app-weatherforecastdetail [forecast]="tomorrowForecast"></app-weatherforecastdetail>
  ```
- Within `src/angularapp/src/app/app.component.ts`
  ```typescript
  tomorrowForecast?: Weatherforecast;
  ```
  ```typescript
    this.weatherService.getTomorrow().subscribe(w => this.tomorrowForecast = w);
  ```

# Add Angular CLI in Dev container
In `.devcontainer/angularapp/devcontainer.json`
```json
				"angular.ng-template"
```

In `.devcontainer/angularapp/Dockerfile`
```yml
# Install the Angular CLI
RUN su node -c "npm install --location=global @angular/cli"
```

# Tricks
- Show the codespace name
  ```bash
  echo $CODESPACE_NAME`
  ```
- List the codespace
  ```bash
  gh auth login -h github.com -s codespace
  gh codespace list
  ```
- Rename a codespace (only its display name)
  ```bash
  gh codespace edit -c permanent name of the codespace -d new display name
  ```