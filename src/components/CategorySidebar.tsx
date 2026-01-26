import { useState } from "react";
import { 
  Music, 
  Guitar, 
  Mic2, 
  Piano, 
  Drum, 
  Music2, 
  Users,
  Headphones,
  Radio
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories?: string[];
}

const categories: Category[] = [
  { 
    id: "all", 
    name: "Todos", 
    icon: <Music className="h-4 w-4" /> 
  },
  { 
    id: "soloists", 
    name: "Músicos solistas", 
    icon: <Mic2 className="h-4 w-4" />,
    subcategories: ["Cantantes", "Guitarristas", "Pianistas", "Violinistas"]
  },
  { 
    id: "bands", 
    name: "Bandas", 
    icon: <Users className="h-4 w-4" />,
    subcategories: ["Rock", "Pop", "Jazz", "Covers"]
  },
  { 
    id: "djs", 
    name: "DJs", 
    icon: <Headphones className="h-4 w-4" />,
    subcategories: ["House", "Techno", "Comercial", "Bodas"]
  },
  { 
    id: "classical", 
    name: "Música clásica", 
    icon: <Piano className="h-4 w-4" />,
    subcategories: ["Cuartetos", "Orquestas", "Ópera"]
  },
  { 
    id: "percussion", 
    name: "Percusión", 
    icon: <Drum className="h-4 w-4" /> 
  },
  { 
    id: "electronic", 
    name: "Electrónica", 
    icon: <Radio className="h-4 w-4" /> 
  },
  { 
    id: "other", 
    name: "Otros", 
    icon: <Music2 className="h-4 w-4" /> 
  },
];

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("soloists");

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-24">
        <h3 className="text-sm font-semibold text-foreground mb-4 px-3">Categorías</h3>
        <nav className="space-y-1">
          {categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => {
                  onSelectCategory(category.id);
                  if (category.subcategories) {
                    setExpandedCategory(expandedCategory === category.id ? null : category.id);
                  }
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "category-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
              
              {/* Subcategories */}
              {category.subcategories && expandedCategory === category.id && (
                <div className="ml-7 mt-1 space-y-1 animate-fade-in">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;
