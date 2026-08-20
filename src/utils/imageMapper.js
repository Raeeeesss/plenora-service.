import deepCleaningImg from '../assets/images/service_deep_cleaning.png';
import vehicleDetailingImg from '../assets/images/service_vehicle_detailing.png';
import bathroomSanitizationImg from '../assets/images/service_bathroom_sanitization.png';
import tankCleaningImg from '../assets/images/service_tank_cleaning.png';
import interlockCleaningImg from '../assets/images/service_interlock_cleaning.png';
import roofWallFloorImg from '../assets/images/service_roof_wall_floor_cleaning.png';
import acpGlassImg from '../assets/images/service_acp_glass_cleaning.png';
import solarPanelImg from '../assets/images/service_solar_panel_cleaning.png';
import sofaMattressImg from '../assets/images/service_sofa_mattress_cleaning.png';
import gardeningImg from '../assets/images/service_gardening_care.png';
import hospitalityImg from '../assets/images/why_hospitality.png';
import cleanersCreamBgImg from '../assets/images/under_hero_cleaners_creambg.png';
import actionCleaningImg from '../assets/images/hero_clean_action1.png';
import teamRightCardImg from '../assets/images/ref_hero_right_card.png';
import aboutFoundingImg from '../assets/images/about_founding.png';
import aboutMissionImg from '../assets/images/about_mission.png';

const localImageRegistry = {
  'service_deep_cleaning.png': deepCleaningImg,
  'service_vehicle_detailing.png': vehicleDetailingImg,
  'service_bathroom_sanitization.png': bathroomSanitizationImg,
  'service_tank_cleaning.png': tankCleaningImg,
  'service_interlock_cleaning.png': interlockCleaningImg,
  'service_roof_wall_floor_cleaning.png': roofWallFloorImg,
  'service_acp_glass_cleaning.png': acpGlassImg,
  'service_solar_panel_cleaning.png': solarPanelImg,
  'service_sofa_mattress_cleaning.png': sofaMattressImg,
  'service_gardening_care.png': gardeningImg,
  'why_hospitality.png': hospitalityImg,
  'under_hero_cleaners_creambg.png': cleanersCreamBgImg,
  'hero_clean_action1.png': actionCleaningImg,
  'ref_hero_right_card.png': teamRightCardImg,
  'about_founding.png': aboutFoundingImg,
  'about_mission.png': aboutMissionImg,
};

/**
 * Resolves an image reference (filename from DB, relative path, or remote URL)
 * into a valid image URL.
 */
export function resolveServiceImage(imageRef, fallback = vehicleDetailingImg) {
  if (!imageRef) return fallback;

  // If it's already an absolute URL (Supabase Storage / CDN / External)
  if (imageRef.startsWith('http://') || imageRef.startsWith('https://') || imageRef.startsWith('data:')) {
    return imageRef;
  }

  // Extract basename if path was provided
  const filename = imageRef.split('/').pop();

  if (localImageRegistry[filename]) {
    return localImageRegistry[filename];
  }

  if (localImageRegistry[imageRef]) {
    return localImageRegistry[imageRef];
  }

  return fallback;
}
