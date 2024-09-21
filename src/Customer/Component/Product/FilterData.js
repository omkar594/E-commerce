

export const color = [
  "White",
  "Black",
  "Red",
  "Marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "COLOR",
    options: [
      { value: "White", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {

      id:"size",
      name:"SIZE",
      options:[
        {
            value:"S",label:"S"
        },
        {
            value:"M",label:"M"
        },
        {
            value:"L",label:"L"
        }
      ],
  },
];
export const singleFilter=[
    {
        id:"price",
        name:"PRICE",
        options:[
            {value:"159-399",label:"159 To 399"},
            {value:"399-999",label:"399 To 999"},
            {value:"999-1999",label:"999 to 1999"},
            {value:"1999-2999",label:"1999 to 2999"},
            {value:"3999-4999",label:"3999 to 4999"}
        ],
    },
    {
        id:"discount",
        name:"DISCOUNT RANGE ",
        options:[
            {
                value:"10",
                label:"10% AND ABOVE"
            },
            {value:"20",label:"20% AND ABOVE"},
            {value:"30",label:"30% AND ABOVE"},
            {value:"40",label:"40% AND ABOVE"},
            {value:"50",label:"50% AND ABOVE"},
            {value:"60",label:"60% AND ABOVE"},
            {value:"70",label:"70% AND ABOVE"},
            {value:"80",label:"80% AND ABOVE"}
        ],
    },
    {
        id:"stock",
        name:"AVAILABILITY",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out of Stock"},
        ],
    },
]

export const sortOptions=[
    {name:"Price Low To High",query:"price_low",current:false},
    {name:"Price High To Low",query:"price_high",current:false},
];