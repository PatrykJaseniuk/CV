
## List motywacyjny

Dzień dobry, z przyjemnością aplikuję na stanowisko **Embedded software engineer** w Państwa firmie. 

Posiadam szerokie umiejętności programistyczne, obejmujące tworzenie systemów zarówno niskopoziomowych (mikrokontrolery, C/C++), jak i wysokopoziomowych (Node.js, TypeScript/JavaScript, React, Python). Programowanie na obu tych poziomach sprawia mi przyjemność. Jestem przekonany, że doświadczenie w programowaniu systemów wysokopoziomowych, przynosi wiele korzyści podczas pracy z systemami niskopoziomowymi.

Chciałbym pracować w Państwa firmie ponieważ, moje zainteresowania i umiejętność pokrywają się z Państwa działalnością. Ponadto uważam,że automatyka budynkowa jest istotna, chociażby w kontekście optymalizacji zużycia energii elektrycznej, która jest coraz droższa.

Wierzę, że przyniosę korzyść Państwa działalności, oraz będę miał możliwość rozwoju w dziedzinie systemów niskopoziomowych i IoT.

Zapraszam do kontaktu. 

PS. Pozycje w CV, które uważam za najistotniejsze z punktu widzenia Państwa działalności oznaczyłem symbolem: 🎯 

## Projekty 📁
###  [ Symulator Statków Żaglowych 🔗](https://patrykjaseniuk.github.io/StatkiTSDocs/) 
<!-- typescript, nextjs, jest -->
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Three.js](https://img.shields.io/badge/three.js-%23000000.svg?style=for-the-badge&logo=three.js&logoColor=white)

Moja praca dyplomowa. Symulator/Gra 2D napisana w TypeScript. Użytkownik za pomocą myszki zmienia parametry żagli i steru aby kontrolować statek. Symulator prezentuje esencje działania żaglowca. Można ostrzyć, odpadać, robić zwrot przez rufę, sztag, płynąć z wiatrem, a pod wiatr tylko halsować. Cały statek jest zbudowany z molekuł, które są połączone za pomocą "sprężyn"(soft body dynamics).


### [ Strona Reklamowa Siłowni 🔗](https://github.com/PatrykJaseniuk/ParysWeb)  
<!-- mantine,typescript, nextjs, react,  storybook -->
[![Mantine](https://img.shields.io/badge/-mantine-%23DDDDDD?style=for-the-badge&logo=mantine&logoColor=black)](https://mantine.dev/)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Storybook](https://img.shields.io/badge/storybook-%23FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white)


Statyczna, jednostronna aplikacja hostowana i budowana na GH (CI/CD) reklamująca siłownie. Wykorzystuje w niej hooki i effecty dla zapewnienia przyjemnego doświadczenia użytkownika. Aplikacja posiada takie elementy jak: rozwijany pasek górny w zależności od przewijania strony, czy możliwość wyboru motywu kolorystycznego, a od strony kodu: izolacja danych od komponentów, podział kodu na warstwy (Stratified Design), programowanie funkcyjne (immutability of data).

### [🎯 Protokoły komunikacji i RTOS🔗](https://github.com/PatrykJaseniuk/Protocols-with-RTOS)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)
![PlatformIO](https://img.shields.io/badge/PlatformIO-0790d6?style=for-the-badge&logo=platformio&logoColor=white)
![RTOS](https://img.shields.io/badge/RTOS-007bff?style=for-the-badge&logo=rtos&logoColor=white)
![SPI](https://img.shields.io/badge/SPI-0790d6?style=for-the-badge&logo=spi&logoColor=white)
![I2C](https://img.shields.io/badge/I2C-0790d6?style=for-the-badge&logo=i2c&logoColor=white)
![UART](https://img.shields.io/badge/UART-0790d6?style=for-the-badge&logo=uart&logoColor=white)

Implementacja podstawowych protokołów komunikacyjnych wspieranych przez mikrokontroler AVR-Atmega328P-PU (Arduino):
- SPI (Serial Peripheral Interface)
- I2C (Inter-Integrated Circuit)
- UART (Universal Asynchronous Receiver Transmitter)

System składa się z dwóch płytek Arduino z których jedna pełni rolę `MASTER` a druga `SLAVE`. Wykorzystany został `FreeRTOS`, aby komunikacja we wszystkich trzech protokołach odbywała się współbieżnie.


### [🎯 Ploter typu SCARA 🔗 ](https://drive.google.com/file/d/1_Z_dXjcvP0CPlf9QE-HNv7zYCz60txby/view?usp=sharing)  
<!-- mantine,typescript, nextjs, react,  storybook -->
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)

Projekt ze studiów w ramach kursu 'Systemy Wbudowane'. Jest to ploter zbudowany z ramienia o dwóch przegubach obrotowych z równoległymi osiami obrotu. 

Działanie w skrócie: 
- Z dowolnego pliku graficznego za pomocą programu Incsape generowany jest `G-code`
- `G-code` jest przesyłany do programu działającego na pc, który przesyła kolejne współrzędne do arduino przez interfejs usb, 
- Arduino odbiera współrzędne, z równań ruchu wyznacza kąty i za pomocą PWM przesyła je do serwomechanizmów
- Serwomechanizmy poruszają ramieniem i powstaje rysunek   

Link odnosi się do pliku wideo prezentującego działanie plotera.

## Umiejętności 💪  

### Języki programowania 💻 
 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) 
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)

- **TypeScript**  -Aktualnie mój ulubiony język programowania. Cenię w aplikacjach pisanych w TS/JS łatwość uruchomiania na wielu urządzeniach (wystarczy przeglądarka internetowa, lub node). Unikam JS ze wzgledu na brak typowania. Staram się pisać kod w stylu funkcyjnym(korzystać tylko ze stałych), ponieważ jest łatwiejszy w zrozumieniu(brak efektów ubocznych funkcji). 
- 🎯 **C/C++**  - Pierwszy język, który poznałem. Dostarcza więcej kontroli (np. brak garbage collector) w porównaniu do TS, jednak programowanie w nim jest mniej wygodne (np. deklaracja i definicja funkcji w osobnych plikach) .
- **Java** - Drugi język który poznałem, rozwinąłem za pomocą niego koncepcję programowania obiektowego.
- **C#** - Podobny do Javy. 
- 🎯 **Python** -korzystałem np. podczas programowania Raspberry Pi i projektów wykorzystujących przetwarzanie obrazu. 
- **PHP** - nie przepadam.


### Frameworki/ biblioteki 📚
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Prisma](https://img.shields.io/badge/-prisma-%232D3748?style=for-the-badge&logo=prisma&logoColor=white)

- **React** - Po poznaniu React, polubiłem tworzenie interfejsów użytkownika.
- **NextJS** - Wygodny framework/narzędzie, korzystam do budowania aplikacji TS+React.
- **Jest** - Staram się pokryć jak najwięcej kodu testami.
- **Prisma** - Fajny ORM z pełnym typowanie.

### Narzędzia 🛠
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![VSCode](https://img.shields.io/badge/-vscode-%23007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Linux Mint](https://img.shields.io/badge/Linux%20Mint-87CF3E?style=for-the-badge&logo=Linux%20Mint&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![PlatformIO](https://img.shields.io/badge/platformio-%231B5CCA.svg?style=for-the-badge&logo=platformio&logoColor=white)
![wireshark](https://img.shields.io/badge/-wireshark-%231A1A1A?style=for-the-badge&logo=wireshark&logoColor=white)

- 🎯 **Git** - Dla każdej nowej funkcjonalności tworzę nową gałąź i po zakończeniu pracy nad nią łączę ją z gałęzią główną. Staram się nazywać commit-y zgodnie z `conventional commits`.
- **Visual Studio Code** - Jest to moje ulubione IDE. Cenię jego prostotę i uniwersalność (ogromną ilość dodatków). 
- **Linux** - System operacyjny o otwartym kodzie źródłowym daje znacznie większą kontrolę nad sprzętem.
- **Docker** - Lekkie wirtualne środowiska.
- 🎯 **PlatformIO** - Środowisko i menadżer pakietów dla systemów wbudowanych.
- 🎯 **Wireshark** - Korzystam, aby lepiej zrozumieć protokoły komunikacyjne.

### Bazy danych 🗃
![PostgreSQL](https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/supabase-%23323330.svg?style=for-the-badge&logo=supabase&logoColor=white)

- **Supabase**- Aktualnie tworzę projekt korzystając z Supabase jako backendu. S udostępnia orm, który generuje typy na podstawie utworzonej bazy.

### Druk 3D 🖨️
![Blender](https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white)
![Fusion 360](https://img.shields.io/badge/fusion%20360-%23FF6D00.svg?style=for-the-badge&logo=autodesk&logoColor=white)
![FreeCAD](https://img.shields.io/badge/FreeCAD-%23333333.svg?style=for-the-badge&logo=freecad&logoColor=white)
![OrcaSlicer](https://img.shields.io/badge/OrcaSlicer-%2300A0D1.svg?style=for-the-badge&logoColor=white)


- **Systemy CAD** - Do projektowania modeli korzystam z różnych programów np. Fusion 360, Blender,  FreeCAD.
- **Systemy CAM** - Gotowy model 3d przetwarzam zazwyczaj za pomocą OrcaSlicer do .gCode 
- **Drukarka 3D** - Korzystam z drukarki w technologi FDM, z oprogramowaniem Klipper/Mainsail

### Języki naturalne 🌐 
- **Angielski** - B2.
- **Polski** - Ojczysty.

## Edukacja 🎓
PANS w Nysie kierunek Informatyka (2019-2023) (Nie oddana praca dyplomowa)