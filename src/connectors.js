const connectors = [
    {
        "id": 963751069051,
        "name": "55A2-1610",
        "description": "'5500 Series, Attachable, Sz 16, 10 contact, Dry Mate Receptacle'",
        "pressure_rating": "10K",
        "voltage_rating": 600,
        "wiregauge": 20,
        "contacts": "10",
        "jpeg_file_url": "/converters.jpg",
        "gender": "Male"
    },
    {
        "id": 963751069052,
        "name": "55A2-1610",
        "description": "'5500 Series, Attachable, Sz 16, 10 contact, Dry Mate Receptacle'",
        "pressure_rating": "10K",
        "voltage_rating": 600,
        "wiregauge": 20,
        "contacts": "10",
        "jpeg_file_url": "/converters.jpg",
        "gender": "Male"
    },
    {
        "id": 963751069053,
        "name": "55A2-1610",
        "description": "'5500 Series, Attachable, Sz 16, 10 contact, Dry Mate Receptacle'",
        "pressure_rating": "10K",
        "voltage_rating": 600,
        "wiregauge": 20,
        "contacts": "10",
        "jpeg_file_url": "/converters.jpg",
        "gender": "Male"
    },
    {
        "id": 963751069054,
        "name": "55A2-1610",
        "description": "'5500 Series, Attachable, Sz 16, 10 contact, Dry Mate Receptacle'",
        "pressure_rating": "10K",
        "voltage_rating": 600,
        "wiregauge": 20,
        "contacts": "10",
        "jpeg_file_url": "/converters.jpg",
        "gender": "Male"
    },
    {
        "id": 963751069055,
        "name": "55A2-1610",
        "description": "'5500 Series, Attachable, Sz 16, 10 contact, Dry Mate Receptacle'",
        "pressure_rating": "10K",
        "voltage_rating": 600,
        "wiregauge": 20,
        "contacts": "10",
        "jpeg_file_url": "/converters.jpg",
        "gender": "Male"
    }
];

const delay = timeout =>
  new Promise(resolve => setTimeout(() => resolve(connectors), timeout))

export const fetchConnectors = () => (
  delay(500)
)
