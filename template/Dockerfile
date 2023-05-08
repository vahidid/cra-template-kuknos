FROM harbor.kuknos.ir/kuknos/node:16 as build

WORKDIR /usr/src/app

# COPY package.json yarn.lock ./
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

ARG build_mode

COPY . .

# Copy the env file by environment
COPY .env.${build_mode}.sample ./.env

RUN --mount=type=cache,target=./node_modules/.cache/webpack yarn build

# NginX stage
FROM harbor.kuknos.ir/kuknos/nginx:alpine

COPY --from=build /usr/src/app/nginx.conf /etc/nginx

COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
