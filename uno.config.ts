import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerVariantGroup,
} from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { Breakpoints } from './src/constant/breakpoint'


export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: <Theme>{
    breakpoints: {
      md: `${Breakpoints.md}px`,
      lg: `${Breakpoints.lg}px`,
      xl: `${Breakpoints.xl}px`,
    },
    colors: {
      black: '#1D1D1E',
      white: '#FCFCFE',
      gray: {
        10: '#F5F5F5',
        20: '#E0E0E0',
        30: '#BDBDBD',
        40: '#9E9E9E',
        50: '#757575',
        60: '#616161',
        70: '#424242',
        80: '#333333',
        90: '#212121',
        100: '#000000',
      },
      lightGreen: {
        10: '#EAF9F4',
        20: '#D0F0E0',
        30: '#A9E1D2',
        40: '#7AD0C0',
        50: '#4CBFAD',
        60: '#2DAC9F',
        70: '#1E8F8C',
        80: '#16746F',
        90: '#0E5856',
        100: '#06413B',
      },
      blueGreen: {
        10: '#E9F5F7',
        20: '#C6E1E4',
        30: '#A0C5CE',
        40: '#7AA0B2',
        50: '#5C8B9B',
        60: '#2C6D80',
        70: '#245968',
        80: '#1D4D55',
        90: '#163B44',
        100: '#0F2E36',
      },
      green: {
        10: '#F0F4F1',
        20: '#DCE5DA',
        30: '#BCC6B9',
        40: '#9DAC9A',
        50: '#7C9A76',
        60: '#6E8B68',
        70: '#5B7A5B',
        80: '#4F6A4F',
        90: '#3F5B3F',
        100: '#2E4D2E',
      },
      blue: {
        10: '#F0F4F9',
        20: '#D3DDF3',
        30: '#A6C0E0',
        40: '#7D9DD0',
        50: '#5484B5',
        60: '#3268A1',
        70: '#2D5492',
        80: '#274580',
        90: '#20366E',
        100: '#1A2E5A',
      },
      cream: {
        10: '#FFFDF7',
        20: '#FDF9EC',
        30: '#F6F3D9',
        40: '#F0EEC3',
        50: '#EAE6B7',
        60: '#E4DD9F',
        70: '#C8C390',
        80: '#B2A877',
        90: '#9D8D62',
        100: '#7C6E4C',
      },
      brown: {
        10: '#F7F4F0',
        20: '#E9E0D7',
        30: '#D7C6B9',
        40: '#BEAFA2',
        50: '#A89482',
        60: '#8D785E',
        70: '#6F5F44',
        80: '#5C4C34',
        90: '#473C26',
        100: '#3B2E1F',
      },
    },
  },
  shortcuts: [
    {
      'text-bold': 'font-bold',
    },
    [/^(flex|grid)-center/g, () => 'justify-center items-center'],
    [/^trans-(\d+)$/, ([, d]) => `transition duration-${d} transform`],
    [
      /^text-banner-(lg|md|sm|xs)(-lighter)?(-denser)?$/,
      ([, size, lighter, denser]) => {
        const sizes = {
          lg: 'lt-md:font-size-12 at-md:font-size-14 lg:font-size-20',
          md: 'lt-md:font-size-9 at-md:font-size-12 lg:font-size-14',
          sm: 'lt-md:font-size-8 at-md:font-size-9 lg:font-size-12',
          xs: 'lt-md:font-size-8 at-md:font-size-9 lg:font-size-10.5',
        }
        return (
          `${sizes[size]} tracking-0` +
          ` ${lighter ? 'font-medium' : 'font-bold'}` +
          ` ${denser ? 'lh-[1.1]' : 'lh-[1.35]'}`
        )
      },
    ],
    [
      /^text-headline-(xl|lg|md|sm|)(-lighter)?$/,
      ([, size, lighter]) => {
        const sizes = {
          xl: 'lt-md:font-size-7 at-md:font-size-8 lg:font-size-9',
          lg: 'lt-md:font-size-6 at-md:font-size-7 lg:font-size-8',
          md: 'lt-md:font-size-5 at-md:font-size-6 lg:font-size-7',
          sm: 'lt-md:font-size-4.5 at-md:font-size-5 lg:font-size-6',
        }
        return (
          `${sizes[size]} lh-[1.35] tracking-0.02rem` +
          ` ${lighter ? 'font-medium' : 'font-bold'}`
        )
      },
    ],
    [
      /^text-title-(xl|lg|md|sm|)(-lighter)?$/,
      ([, size, lighter]) => {
        const sizes = {
          xl: 'font-size-5',
          lg: 'font-size-4.5',
          md: 'font-size-4',
          sm: 'font-size-3.5',
        }
        return (
          `${sizes[size]} lh-[1.5] tracking-0.02rem` +
          ` ${lighter ? 'font-medium' : 'font-bold'}`
        )
      },
    ],
    [
      /^text-content-(md|sm)(-bolder)?(-denser)?$/,
      ([, size, bolder, denser]) => {
        const sizes = {
          md: 'font-size-4',
          sm: 'font-size-3.5',
        }
        return (
          `${sizes[size]} tracking-0.02rem` +
          ` ${bolder ? 'font-bold' : 'font-normal'}` +
          ` ${denser ? 'lh-[1.5]' : 'lh-[1.75]'}`
        )
      },
    ],
    [
      /^text-caption-(md|sm)(-bolder)?(-sparser)?$/,
      ([, size, bolder, sparser]) => {
        const sizes = {
          md: 'font-size-3',
          sm: 'font-size-2.5',
        }
        return (
          `${sizes[size]} tracking-0.02rem` +
          ` ${bolder ? 'font-bold' : 'font-normal'}` +
          ` ${sparser ? 'lh-[1.75]' : 'lh-[1.35]'}`
        )
      },
    ],
  ],
  transformers: [transformerVariantGroup()],
})
