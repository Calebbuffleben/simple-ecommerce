import { Controller, useForm } from "react-hook-form";

const ProductFiltersComponent = ({ onFilterChange }) => {
    const { handleSubmit, control } = useForm();

    const handleFormSubmit = (data) => {
        onFilterChange(data);
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div>
                <label>Category</label>
                <Controller 
                    name="category"
                    control={control}
                    render={({ field }) => <input {...field} />}
                /> 
            </div>

            <div>
                <label>Price Range:</label>
                <Controller
                    name="minPrice"
                    control={control}
                    render={({ field }) => <input {...field} type="number" placeholder="Min" />}
                />
                <Controller
                    name="maxPrice"
                    control={control}
                    render={({ field }) => <input {...field} type="number" placeholder="Max" />}
                />
            </div>

            <div>
                <label>Brand:</label>
                <Controller
                    name="brand"
                    control={control}
                    render={({ field }) => <input {...field} />}
                />
            </div>

            <div>
                <button type="submit">Apply Filters</button>
            </div>
        </form>
    )

}

export default ProductFiltersComponent;