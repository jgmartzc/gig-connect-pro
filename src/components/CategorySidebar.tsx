import { useState } from "react";
import { 
  Music, 
  Mic2, 
  Calendar,
  ChevronDown,
  ChevronRight
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
    name: "Todos los artistas", 
    icon: <Music className="h-7 w-7" /> 
  },
  { 
    id: "soloists", 
    name: "Músicos solistas", 
    icon: <Mic2 className="h-7 w-7" />,
    subcategories: ["Cantantes", "Guitarristas", "Pianistas", "Violinistas", "Saxofonistas", "Otros"]
  },
  { 
    id: "events", 
    name: "Eventos", 
    icon: <Calendar className="h-7 w-7" />,
    subcategories: ["Bodas", "Eventos corporativos", "Restaurantes", "Fiestas privadas", "Ceremonias", "Otros"]
  },
];

interface CategorySidebarProps {
  selectedCategory: string;
  selectedSubcategory: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectSubcategory: (subcategory: string | null) => void;
}

const CategorySidebar = ({ selectedCategory, selectedSubcategory, onSelectCategory, onSelectSubcategory }: CategorySidebarProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("soloists");

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 bg-card rounded-xl border border-border p-4">
        <h3 className="text-xl font-bold text-foreground mb-6 px-2">Categorías</h3>
        <nav className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => {
                  onSelectCategory(category.id);
                  onSelectSubcategory(null);
                  if (category.subcategories) {
                    setExpandedCategory(expandedCategory === category.id ? null : category.id);
                  }
                }}
                className={`w-full flex items-center justify-between px-5 py-5 rounded-xl text-lg transition-all duration-200 ${
                  selectedCategory === category.id && !selectedSubcategory
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <div className="flex items-center gap-4">
                  {category.icon}
                  <span className="font-bold text-lg">{category.name}</span>
                </div>
                {category.subcategories && (
                  expandedCategory === category.id 
                    ? <ChevronDown className="h-5 w-5" />
                    : <ChevronRight className="h-5 w-5" />
                )}
              </button>
              
              {/* Subcategories */}
              {category.subcategories && expandedCategory === category.id && (
                <div className="ml-6 mt-2 space-y-1 animate-fade-in border-l-2 border-border pl-4">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => {
                        onSelectCategory(category.id);
                        onSelectSubcategory(sub);
                      }}
                      className={`w-full text-left px-4 py-3 text-lg transition-colors rounded-lg ${
                        selectedSubcategory === sub
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
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
