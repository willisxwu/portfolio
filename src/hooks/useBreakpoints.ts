import { ref, onMounted, onUnmounted } from 'vue';
import { Breakpoints } from '../constant/breakpoint';

export function useBreakpoints() {
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktop = ref(false);

  const updateBreakpoints = () => {
    const width = window.innerWidth;
    isMobile.value = width < Breakpoints.md;
    isTablet.value = width >= Breakpoints.md && width < Breakpoints.lg;
    isDesktop.value = width >= Breakpoints.lg;
  };

  onMounted(() => {
    updateBreakpoints();
    window.addEventListener('resize', updateBreakpoints);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoints);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
