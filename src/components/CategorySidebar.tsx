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
    name: "Todos", 
    icon: <Music className="h-4 w-4" /> 
  },
  { 
    id: "soloists", 
    name: "Músicos solistas", 
    icon: <Mic2 className="h-5 w-5" />,
    subcategories: ["Cantantes", "Guitarristas", "Pianistas", "Violinistas", "Saxofonistas", "Otros"]
  },
  { 
    id: "events", 
    name: "Eventos", 
    icon: <Calendar className="h-5 w-5" />,
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
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-24">
        <h3 className="text-sm font-semibold text-foreground mb-4 px-3">Categorías</h3>
        <nav className="space-y-1">
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
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  selectedCategory === category.id && !selectedSubcategory
                    ? "category-active"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </div>
                {category.subcategories && (
                  expandedCategory === category.id 
                    ? <ChevronDown className="h-4 w-4" />
                    : <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {/* Subcategories */}
              {category.subcategories && expandedCategory === category.id && (
                <div className="ml-7 mt-1 space-y-1 animate-fade-in">
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => {
                        onSelectCategory(category.id);
                        onSelectSubcategory(sub);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors rounded-md ${
                        selectedSubcategory === sub
                          ? "text-primary font-medium bg-primary/10"
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
