import os
import json


DUMMY_DIR = os.path.join(os.path.dirname(__file__), "dummy_data")


def load_dummy_data(filename):
    fn = os.path.join(DUMMY_DIR, filename)
    with open(fn) as f:
        return json.load(f)
