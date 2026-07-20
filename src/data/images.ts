// ============================================================
// WHOLE-SITE IMAGES
// HOW TO ACTIVATE A PHOTO:
//   1. Put the file in  src/assets/  named exactly as the key + .jpg
//      (e.g. key 'pvc-pipes'  ->  src/assets/pvc-pipes.jpg)
//   2. Uncomment its import line below.
//   3. Uncomment the matching line inside the map.
// Anything left commented shows the themed placeholder — nothing breaks.
// ============================================================

// ---- SINGLES ----
 import heroImg          from '@/assets/34.jpg'
 import aboutHeroImg     from '@/assets/5.jpg'
 import ecosystemImg     from '@/assets/34.jpg'
 import featuredImg      from '@/assets/34.jpg'

// ---- HOMEPAGE PRODUCT RANGE (8) ----
 import pvcPipesImg          from '@/assets/9.jpg'
 import cpvcSystemsImg       from '@/assets/8.jpg'
 import swrSystemsImg        from '@/assets/11.jpg'
 import borewellPipesImg     from '@/assets/7.jpg'
 import waterTanksImg        from '@/assets/13.jpg'
 import industrialFittingsImg from '@/assets/10.jpg'
 import agriSolutionsImg     from '@/assets/6.jpg'
 import dwcPipesImg          from '@/assets/12.jpg'

// ---- HOMEPAGE PROJECTS (6) ----
 import municipalImg     from '@/assets/46.jpg'
 import residentialProjImg from '@/assets/42.jpg'
 import factoryImg       from '@/assets/37.jpg'
 import irrigationImg    from '@/assets/AB6AXuClQlhn9E-79y3tipoVHt65mqVQWGIcQ5bj4-drpn4mYVStEdDbb4ZDNVtc3eDqSr-7P9vg9z67QNWc2ZKrNl6UvxKI2g33tjwc-Vl7jwFokWdoh4kxyITyF8XcBawCjQwr5r3Rr5aY5lI7H6yVagE9DwWIC-C458ZU3I1gnGzXhqFeGt58IzUW1_kHyKgqPA6ETokYW1PqfGVwxIFd-bzmNSEkdMH2LpL34ozALyN1cx22qFiz.jpg'
 import sewerImg         from '@/assets/44.jpg'
 import rainwaterImg     from '@/assets/35.jpg'

// ---- ABOUT CASE STUDIES (4) ----
import metroImg         from '@/assets/2.jpg'
import chennaiImg       from '@/assets/4.jpg'
import ecoImg           from '@/assets/3.jpg'
import ghatsImg         from '@/assets/4.jpg'

// ---- ABOUT SPECIALIZED (4) ----
import indCpvcImg       from '@/assets/1.jpg'
import pvcInfraImg      from '@/assets/3.jpg'
import agriRangeImg     from '@/assets/3.jpg'
import specialtyImg     from '@/assets/1.jpg'

// ---- SOLUTIONS (6) ----
 import solWaterImg      from '@/assets/48.jpg'    
 import solResidentialImg from '@/assets/39.jpg'
 import solCommercialImg from '@/assets/31.jpg'
 import solIndustrialImg from '@/assets/32.jpg'
 import solInfraImg      from '@/assets/33.jpg'
 import solDrainageImg   from '@/assets/40.jpg'

// ---- INDUSTRIES (6) ----
 import indResidentialImg from '@/assets/41.jpg'
 import indCommercialImg from '@/assets/38.jpg'
 import indHealthcareImg from '@/assets/43.jpg'
 import indManufacturingImg from '@/assets/47.jpg'
 import indAgricultureImg from '@/assets/45.jpg'
 import indInfraImg      from '@/assets/33.jpg'

// ---- PRODUCTS PAGE PORTFOLIOS (tiles: plumbing, industrial, agri, storage) ----
 import pfPlumbingImg    from '@/assets/17.jpg'
 import pfIndustrialImg  from '@/assets/16.jpg'
 import pfAgriImg        from '@/assets/14.jpg'
 import pfStorageImg     from '@/assets/18.jpg'

// ---- PRODUCTS PAGE TRENDING (12) ----
 import trSmartfitImg    from '@/assets/28.jpg'
 import trGreenfitImg    from '@/assets/25.jpg'
 import trStorefitImg    from '@/assets/30.jpg'
 import trEasyfitImg     from '@/assets/22.jpg'
 import trBallvalveImg   from '@/assets/27.jpg'
 import trConnectorImg   from '@/assets/29.jpg'
 import trFlowImg        from '@/assets/23.jpg'
 import trFoamfitImg     from '@/assets/24.jpg'
 import trAquafitImg     from '@/assets/19.jpg'
 import trBrassImg       from '@/assets/20.jpg'
 import trCpvcproImg     from '@/assets/21.jpg'
 import trHdpeImg        from '@/assets/26.jpg'



 // ---- PRODUCT GALLERY (25) ----
import galWallMixerStrip  from '@/assets/gallery/24.jpg'
import galBallValveGrip   from '@/assets/gallery/11.jpg'
import galRftElbowClamp   from '@/assets/gallery/20.jpg'
import galElbow           from '@/assets/gallery/18.jpg'
import galElbow45         from '@/assets/gallery/19.jpg'
import galCoupler         from '@/assets/gallery/1.jpg'
import galTeeSch40        from '@/assets/gallery/5.jpg'
import galUnion           from '@/assets/gallery/9.jpg'
import galNrv             from '@/assets/gallery/2.jpg'
import galFourWayTee      from '@/assets/gallery/22.jpg'
import galEndCap          from '@/assets/gallery/12.jpg'
import galCrossOver       from '@/assets/gallery/8.jpg'
import galFabricatedBend  from '@/assets/gallery/7.jpg'
import galFlangeSocket    from '@/assets/gallery/21.jpg'
import galTankConnector   from '@/assets/gallery/13.jpg'
import galReducer         from '@/assets/gallery/17.jpg'
import galReducingMale    from '@/assets/gallery/10.jpg'
import galReducingTee     from '@/assets/gallery/15.jpg'
import galTransitionBush  from '@/assets/gallery/16.jpg'
import galSolventTube     from '@/assets/gallery/25.jpg'
import galWallMixerDown   from '@/assets/gallery/14.jpg'
import galSolventTin      from '@/assets/gallery/6.jpg'
import galWallMixerSide   from '@/assets/gallery/3.jpg'
import galFemaleAdapter   from '@/assets/gallery/23.jpg'
import galElbow45B        from '@/assets/gallery/4.jpg'

// ============================================================ 

export const HERO_IMAGE: string | undefined = heroImg
export const ABOUT_HERO_IMAGE: string | undefined = aboutHeroImg
export const ECOSYSTEM_IMAGE: string | undefined = ecosystemImg
export const FEATURED_IMAGE: string | undefined = featuredImg

// Homepage product range — keys = product name lowercased-hyphenated
export const PRODUCT_IMAGES: Record<string, string | undefined> = {
   'pvc-pipes': pvcPipesImg,
   'cpvc-systems': cpvcSystemsImg,
   'swr-systems': swrSystemsImg,
   'borewell-pipes': borewellPipesImg,
   'water-tanks': waterTanksImg,
   'industrial-fittings': industrialFittingsImg,
   'agri-solutions': agriSolutionsImg,
   'dwc-pipes': dwcPipesImg,
}

// Homepage projects gallery
export const PROJECT_IMAGES: Record<string, string | undefined> = {
   municipal: municipalImg,
   residential: residentialProjImg,
   factory: factoryImg,
   irrigation: irrigationImg,
   sewer: sewerImg,
   rainwater: rainwaterImg,
}

// About page — Infrastructure Portfolio case studies
export const CASE_STUDY_IMAGES: Record<string, string | undefined> = {
   metro: metroImg,
   chennai: chennaiImg,
   eco: ecoImg,
   ghats: ghatsImg,
}

// About page — Specialized Piping Solutions
export const SPECIALIZED_IMAGES: Record<string, string | undefined> = {
   'industrial-cpvc': indCpvcImg,
   'pvc-infrastructure': pvcInfraImg,
   'agriculture-range': agriRangeImg,
   'specialty-fittings': specialtyImg,
}

// Solutions page — Comprehensive Solutions cards
export const SOLUTION_IMAGES: Record<string, string | undefined> = {
   water: solWaterImg,
   residential: solResidentialImg,
   commercial: solCommercialImg,
   industrial: solIndustrialImg,
   infrastructure: solInfraImg,
   drainage: solDrainageImg,
}

// Solutions page — Industries We Serve carousel
export const INDUSTRY_IMAGES: Record<string, string | undefined> = {
   residential: indResidentialImg,
   commercial: indCommercialImg,
   healthcare: indHealthcareImg,
   manufacturing: indManufacturingImg,
   agriculture: indAgricultureImg,
   infrastructure: indInfraImg,
}

// Products page — Product Portfolios (only 'tile' kind uses a photo)
export const PORTFOLIO_IMAGES: Record<string, string | undefined> = {
   plumbing: pfPlumbingImg,
   industrial: pfIndustrialImg,
   agri: pfAgriImg,
   storage: pfStorageImg,
}

// Products page — Trending Engineered Solutions (12)
export const TRENDING_IMAGES: Record<string, string | undefined> = {
   smartfit: trSmartfitImg,
   greenfit: trGreenfitImg,
   storefit: trStorefitImg,
   easyfit: trEasyfitImg,
   ballvalve: trBallvalveImg,
   connector: trConnectorImg,
   flowassembly: trFlowImg,
   foamfit: trFoamfitImg,
   aquafit: trAquafitImg,
   brassvalve: trBrassImg,
   cpvcpro: trCpvcproImg,
   hdpe: trHdpeImg,
}

// Product Gallery — keys = gallery item id (src/data/gallery.ts)
// Product Gallery — keys = gallery item id (src/data/gallery.ts)
export const GALLERY_IMAGES: Record<string, string | undefined> = {
  'wall-mixer-strip': galWallMixerStrip,
  'ball-valve-grip':  galBallValveGrip,
  'rft-elbow-clamp':  galRftElbowClamp,
  'elbow':            galElbow,
  'elbow-45':         galElbow45,
  'coupler':          galCoupler,
  'tee-sch40':        galTeeSch40,
  'union':            galUnion,
  'nrv':              galNrv,
  'four-way-tee':     galFourWayTee,
  'end-cap':          galEndCap,
  'cross-over':       galCrossOver,
  'fabricated-bend':  galFabricatedBend,
  'flange-socket':    galFlangeSocket,
  'tank-connector':   galTankConnector,
  'reducer':          galReducer,
  'reducing-male':    galReducingMale,
  'reducing-tee':     galReducingTee,
  'transition-bush':  galTransitionBush,
  'solvent-tube':     galSolventTube,
  'wall-mixer-down':  galWallMixerDown,
  'solvent-tin':      galSolventTin,
  'wall-mixer-side':  galWallMixerSide,
  'female-adapter':   galFemaleAdapter,
  'elbow-45-b':       galElbow45B,
}