import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Full-Stack"]
  },
  {
    filterType: "Salary",
    array: ["0-40k", "40k-70k", "above 100k"]
  },
]

const FilterCard = () => {
  return (
    <div className="w-[250px] p-4 border rounded-lg shadow-sm bg-white">
      
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3 mb-4" />

      <RadioGroup className="flex flex-col space-y-4">
        {filterData.map((data, index) => (
          <div key={index}>
            
            {/* Section Title */}
            <h2 className="font-semibold mb-2 text-gray-700">
              {data.filterType}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-2">
              {data.array.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <RadioGroupItem value={item} id={`${data.filterType}-${i}`} />
                  <Label htmlFor={`${data.filterType}-${i}`}>
                    {item}
                  </Label>
                </div>
              ))}
            </div>

          </div>
        ))}
      </RadioGroup>

    </div>
  )
}

export default FilterCard