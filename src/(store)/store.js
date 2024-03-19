import { create } from 'zustand';

const useStore = create((set, get) => ({
  slug: {},
  search:false,
  lang:"vi",
  setSlug: (data) => {
    set((state) => {
      return {
        ...state,
        slug: data,
      };
    });
  },
  setSearch: (data) => {
    set((state) => {
      return {
        ...state,
        search: data,
      };
    });
  },
  setLang: (data) => {
    set((state) => {
      return {
        ...state,
        lang: data,
      };
    });
  },
  
}));

export default useStore;
