#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/CvTool.Skills.Api/CvTool.Skills.Api.csproj", "src/CvTool.Skills.Api/"]
RUN dotnet restore "src/CvTool.Skills.Api/CvTool.Skills.Api.csproj"
COPY . .
WORKDIR "/src/src/CvTool.Skills.Api"
RUN dotnet build "CvTool.Skills.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CvTool.Skills.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CvTool.Skills.Api.dll"]