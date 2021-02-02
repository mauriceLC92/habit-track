export const HabitBlock = () => {
    return (
        <li className="cursor-pointer">
            <a className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
                <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                    <div>
                        <dt className="sr-only">Title</dt>
                        <dd className="group-hover:text-white leading-6 font-medium text-black">
                            title
                        </dd>
                    </div>
                    <div>
                        <dt className="sr-only">Category</dt>
                        <dd className="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                            category
                        </dd>
                    </div>
                    <div className="col-start-2 row-start-1 row-end-3">
                        <dt className="sr-only">Users</dt>
                        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                            <img
                                x-for="user in item.users"
                                width="48"
                                height="48"
                                className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
                            />
                        </dd>
                    </div>
                </dl>
            </a>
        </li>
    );
};

export const HabitBlockEmpty = () => {
    return (
        <li className="hover:shadow-lg flex rounded-lg">
            <a
                href="/new"
                className="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4"
            >
                New Project
            </a>
        </li>
    );
};
