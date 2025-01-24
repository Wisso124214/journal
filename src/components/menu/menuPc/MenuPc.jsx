import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"

const MenuPc = ({ props }) => {

  const { categories, setCategorySelected, setTitleCategorySelected, tags, setFilterBy, setTagSelected } = props;
  
  return (
    <div id='navigation' className='flex flex-row leading-10'>
      <div className='categories'>
        <Menubar>
          {
            Object.keys(categories).map((option, index) => (
              <MenubarMenu key={index+'bar'} >
                <MenubarTrigger key={index+'trigger'} className='capitalize px-8 flex flex-col self-center' >{option}</MenubarTrigger>
                <MenubarContent key={index+'cont'} className='flex flex-col py-2 px-1' >
                  {categories[option].map((item, index) => (
                    <MenubarItem 
                    key={index} 
                    className=' hover:bg-f5 rounded-md flex flex-col self-center w-full' 
                    onClick={() => {
                      setCategorySelected(item);
                      setTitleCategorySelected(option);
                      setFilterBy('categorySelected');
                    }}>

                      {item}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            ))
          }
        </Menubar>
      </div>
      <div className="tags flex flex-row">
        {
          tags.map((tag, index) => (
            <Button 
              key={index} 
              variant='outline' 
              className='capitalize ml-4' 
              onClick={()=>{
                setTagSelected(tag);
                setFilterBy('tagSelected');
              }}>

                {tag}
              </Button>
          ))
        }
      </div>
    </div>
  );
}

export default MenuPc;